// DELETE route
app.delete("/user",(req, res) => {
    console.log("DELETE request received");
    // handle the delete Logic here
    res.json({
        message: "User eleted successfully"
    });
});
