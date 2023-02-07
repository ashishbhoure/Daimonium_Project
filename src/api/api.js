import {CONST_API} from './apiConst';
import Auth from '../auth/auth';

const auth = new Auth();

export async function get(path) {
  return bodyOf(request('get', path, null));
}

export async function post(path, body) {
  return bodyOf(request('post', path, body));
}

export async function request(method, path, body) {
  try {
    const response = await sendRequest(method, path, body);
    console.log(response);
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
}

export function url(path) {
  const url = CONST_API.U_BASE;
  return url + path;
}

async function sendRequest(method, path, body) {
  try {
    const endpoint = url(path);
    const headers = await getRequestHeaders(body);
    const options = body
      ? {method, headers, body: JSON.stringify(body)}
      : {method, headers};

    return fetch(endpoint, options);
  } catch (e) {
    // ToastAndroid.show(`Error : ${e}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
    console.log(e);
  }
}

async function handleResponse(response) {
  try {
    const responseBody = await response.text();
    console.log(responseBody);
    // AsyncStorage.setItem('userInfo', JSON.stringify(responseBody));
    return {
      status: response.status,
      headers: response.headers,
      body: responseBody ? JSON.parse(responseBody) : null,
    };
  } catch (e) {
    // ToastAndroid.show(`Error : ${e}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
    console.log(e);
    throw e;
  }
}

const getRequestHeaders = async () => {
  const headersData = {
    'Content-Type': 'application/json',
  };

  const token = await auth.getValue('token');

  if (token) {
    headersData.Authorization = `Bearer ${token}`;
  }
  // console.log('Bearer', token);
  return headersData;
};

async function bodyOf(requestPromise) {
  try {
    const response = await requestPromise;
    return response.body;
  } catch (e) {
    // ToastAndroid.show(`Error : ${e}`, ToastAndroid.SHORT, ToastAndroid.CENTER);
    console.log(e);
    throw e;
  }
}
