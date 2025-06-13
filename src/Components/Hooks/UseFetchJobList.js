import { useEffect, useState } from "react";
import apiClient from "../FetchingApi/api-client";

const UseFetchJobList = () => {
  const [fetchedJobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Spinner state

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true); // Start spinner
      try {
        const res = await apiClient.get("/jobs/");
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.results || [];
        setJobs(data);
       
        console.log("check data", data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { fetchedJobs, loading }; 
};

export default UseFetchJobList;
