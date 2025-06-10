export default function Hello(app) {
    const hello = (req, res) => {
        res.send("Hello world!");
    }

    const index = (req, res) => {
        res.send("Welcome");
    }

    app.get("/hello", hello);

    app.get("/", index);
}