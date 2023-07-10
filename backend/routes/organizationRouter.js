import express from "express";
import { OrganizationModel } from "../models/organizationModel.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const organizationRouter = express.Router();

organizationRouter.get("/", isAuthenticated, async (req, res) => {
  try {
    let searchQuery = req.query;
    searchQuery.user = req.user._id;
    const foundOrganizations = await OrganizationModel.find(searchQuery);
    console.log(foundOrganizations);
    res.send(foundOrganizations);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

organizationRouter.post("/", isAuthenticated, async (req, res) => {
  try {
    let query = req.body;
    query.user = req.user._id;
    const createdOrganization = await OrganizationModel.create(query);
    res.send(createdOrganization);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
