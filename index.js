exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "API is working on AWS Lambda!" }),
    };
};