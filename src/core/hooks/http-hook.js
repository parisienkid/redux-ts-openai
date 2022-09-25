export const useHttp = () => {
    const request = async (url, body = null, method = "GET", headers = {'Content-Type': 'application/json'}) => {
        const response = await fetch(url, {body, method, headers});
        try {
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch(e) {
            throw e;
        }
    };
    return {request};
};
