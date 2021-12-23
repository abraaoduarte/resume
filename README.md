## My Resume and Blog

Project that aims to serve as my personal portfolio and my blog

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [Deploy Vercel](https://abraao-duarte.vercel.app/)

### Run the application in Docker container

To build the image execute the command:
```bash
docker build -t resume .
```

To run the application, execute the following command:

```bash
docker run -dp 3002:3002 resume
```

The application will run on `http://localhost:8080`