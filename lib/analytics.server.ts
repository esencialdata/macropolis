const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const apiSecret = process.env.GA_API_SECRET;

interface ServerEventParams {
  user_id?: string;
  client_id?: string;
  [key: string]: unknown;
}

export async function trackServerEvent(event: string, params: ServerEventParams = {}) {
  if (!measurementId || !apiSecret) {
    return;
  }

  try {
    const clientId = typeof params.client_id === "string" ? params.client_id : "server";
    const payload = {
      client_id: clientId,
      user_id: typeof params.user_id === "string" ? params.user_id : undefined,
      events: [
        {
          name: event,
          params: {
            engagement_time_msec: "1",
            ...params
          }
        }
      ]
    };

    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );
  } catch (error) {
    console.warn("GA server track failed", error);
  }
}
