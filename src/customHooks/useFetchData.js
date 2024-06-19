import React, { useState } from "react";
import { getPhotoStories } from "../services/PhotoStories";
import { getVideoStories } from "../services/VideoStories";
import { getTestimonials } from "../services/Testimonials";
import { getBlogs } from "../services/Blogs";

const useFetchData = () => {
  const [photoStoriesData, setPhotoStoriesData] = useState([]);
  const [videoStoriesData, setVideoStoriesData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);

  const fetchPhotoStories = async () => {
    try {
      const { data, error } = await getPhotoStories();

      if (error) {
        throw new Error("Error while fetching FAQs");
      }

      setPhotoStoriesData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchVideoStories = async () => {
    try {
      const { data, error } = await getVideoStories();

      if (error) {
        throw new Error("Error while fetching FAQs");
      }

      setVideoStoriesData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await getTestimonials();
      if (error) {
        throw new Error("Error while fetching FAQs");
      }
      setTestimonialsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const { data, error } = await getBlogs();
      if (error) {
        throw new Error("Error while fetching FAQs");
      }
      setBlogsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    photoStoriesData,
    fetchPhotoStories,
    videoStoriesData,
    fetchVideoStories,
    testimonialsData,
    fetchTestimonials,
    blogsData,
    fetchBlogs,
  };
};

export default useFetchData;
