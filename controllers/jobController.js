import Job from "../models/JobModel.js";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";


export const getAllJobs = async (req, res) => {  
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ message: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ deleted: job });
};
