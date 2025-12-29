export const handler = async (event) => {
    console.log("EVENT:", event);
  
    let body = {};
    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch (e) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid JSON body" })
      };
    }
  
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Order received", received: body })
    };
  };
  