
## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mhmdnzr/EchoSwap.git
   ```

2. Navigate to the project directory:

   ```bash
   cd EchoSwap
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Scripts

The project includes the following npm scripts in the `package.json` file:

- **dev**: Run the development server using Next.js.

  ```bash
  npm run dev
  ```

- **build**: Build the project for production.

  ```bash
  npm run build
  ```

- **start**: Start the production server.

  ```bash
  npm run start
  ```

- **lint**: Run linting checks using Next.js.

  ```bash
  npm run lint
  ```

- **test:e2e**: Open Cypress for end-to-end testing.

  ```bash
  npm run test:e2e
  ```

## Running with Docker

To run the project using Docker, follow these steps:

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Instructions

1. Navigate to the `docker` directory:

   ```bash
   cd docker
   ```

2. Open the `docker-compose.yml` file and review the configuration.

3. Build the Docker images:

   ```bash
   docker-compose build
   ```

4. Start the Docker containers:

   ```bash
   docker-compose up -d
   ```

   The `-d` flag runs the containers in the background.

5. Access the application in your browser:

   Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Stopping the Containers

To stop the running containers, use the following command:

```bash
docker-compose down
```

This stops and removes the containers, networks, and volumes defined in your `docker-compose.yml` file.

### Additional Configuration

If your Docker Compose setup requires additional configuration or environment variables, make sure to document them in the `docker-compose.yml` file or provide instructions in this README.

**Note**: Replace "3000" with the actual port your application is configured to run on.

## Usage

FOR those seeking decentralized and secure trading platforms, our web-based app stands out as a revolutionary solution. WHO values privacy and autonomy in their financial transactions will appreciate the unparalleled features we offer. THE decentralized nature ensures that users have complete control over their assets, reducing the risk of centralized vulnerabilities.

THAT is not all; UNLIKE traditional exchanges, our product eliminates the need for intermediaries, providing a direct peer-to-peer trading experience. OUR PRODUCT boasts a robust infrastructure that prioritizes security and transparency, offering users peace of mind and confidence in their transactions.
