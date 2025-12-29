export const handler = async (event) => {
    console.log("EVENT:", event);
  
    const orderId =
      event?.pathParameters?.orderId ||
      event?.pathParameters?.id ||
      event?.queryStringParameters?.orderId;
  
    if (!orderId) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing orderId in path" })
      };
    }
  
    // For now just echo (later we’ll read DynamoDB)
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "GetOrder working", orderId })
    };
  };
  
