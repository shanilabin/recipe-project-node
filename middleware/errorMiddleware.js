module.exports = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: "קרתה שגיאה בשרת",
        details: err.message
    });
};