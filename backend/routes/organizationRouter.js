import express from "express";
import { OrganizationModel } from "../models/organizationModel.js";

export const organizationRouter = express.Router();

organizationRouter.get("/", async (req, res) => {
  try {
    console.log(req.query);
    const foundOrganizations = await OrganizationModel.find(req.query);
    console.log(foundOrganizations);
    res.send(foundOrganizations);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

organizationRouter.post("/", async (req, res) => {
  try {
    const createdOrganization = await OrganizationModel.create(req.body);
    res.send(createdOrganization);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
