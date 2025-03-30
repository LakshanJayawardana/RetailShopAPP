# Retail Shop Application

This repository contains the source code for the Retail Shop Application, including both the backend and frontend components.

## Prerequisites

- .NET 8 SDK
- Node.js and npm
- Angular CLI

## Setup Instructions

### Backend

1. Navigate to the backend project directory:
2. Restore the .NET dependencies:
3. Update the database (ensure you have a local SQL Server instance running):
4. Run the backend application:

### Frontend

1. Navigate to the frontend project directory:
2. Install the npm dependencies:
3. Run the frontend application:
4. Open your browser and navigate to `http://localhost:4200`.

## Assumptions
- The backend uses a local SQL Server instance for the database.
- The frontend and backend are running on the same machine.
- The backend API is accessible at `https://localhost:7148/api`.

## Project Structure

- `RetailShopAPP.Server`: Backend project (ASP.NET Core)
- `retailshopapp.client`: Frontend project (Angular)

## API Endpoints

- `GET /api/Invoice/GetInvoices`: Fetch all invoices
- `POST /api/Invoice/AddInvoice`: Add a new invoice
- `GET /api/Invoice/GetProducts`: Fetch all products

   
   
