# Developer Certification

The developer will receive a basic web application with some existing functionalities. This functional assessment aims to transform the application into an Experience App.

## Assessment

We want to assess the developer’s  knowledge of the following categories:

- Best Practices (33%) - 5 pts
- Experience App CLI (20%)  - 3 pts
- Experience App SDK (33%)  - 5 pts
- Experience App Editor (14%)  - 2 pts

Mastery of each category is achieved by scoring at least 80%.

## Assignment

The company "Super Fruit Inc" has a web application that their sales use for both field- and inside sales. The application lacks some functionalities, and the company is eager to shift to the Showpad eOS.

### Inside Sales

The application allows the sales rep to go through a catalog of fruit where they can reveal more information and download a PDF document about each fruit. Available fruits are:

- Blueberries
- Cranberries
- Pomegranates
- Grapes

**Super Fruit Inc requests:**
We want our PDFs to live in the Showpad content library instead of in the web application. Updates should be in real-time. We want insights into how often a PDF is viewed and the ability to share the PDF with the client.

### Field Sales

The application allows the sales rep to create, read, update, and delete a client (warehouse) in Localstorage. A client has the following information:

- Name (string)
- Fruits (Record<fruit, boolean>)

There is a button to generate a PDF document that downloads to the user's device. The sales reps then use their email application to send this PDF to their client.

**Super Fruit Inc requests:**
We want our clients to live in a database that syncs across the devices of our sales teams. When our app generates a PDF upload, it will be stored in Showpad instead of getting misplaced or forgotten on the user's local device storage.


## Specific Objectives

- Best Practices (33%) - 5 pts
  - [ ] (4 pts) Code quality (below points are attention points to grade upon)
  - [x] Assets (pdfs, images) are removed from the bundle
  - [x] Circumventing the Client Interface problem (Scalar)
  - [x] Using an interface to type ConfigJSON
  - [x] Upload the 4 PDF documents in the Showpad Library.
  - [x] (1 pt) Tag exists on PDF documents
- Experience App CLI (20%)  - 3 pts
  - [x] (1 pt) Experience App CLI is installed
  - [x] (1 pt) Experience App Proxy is installed
  - [x] (1 pt) Application is deployed on Showpad
- Experience App SDK (33%)  - 5 pts
  - [x] (1 pt) `openAssetViewer()` is used (Asset opens in asset viewer)
  - [x] (1 pt) `getStoreEntries()` is used 
  - [x] (1 pt) `setStoreEntryValue()` is used 
  - [x] (1 pt) `deleteStoreEntry()` is used
  - [ ] (1 pt) `upload()` is used
- Experience App Editor (14%)  - 2 pts
  - [x] (1 pt) Tags content type is used
  - [x] (1 pt) parseEnrichedConfig() is used