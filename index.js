const fetch = require("node-fetch");
class Auth {
  constructor(key) {
    this.settings = {
      auth: key,
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      url: {
        getGroups: "https://api.dev-up.ru/method/vk.getGroups",
        getApps: "https://api.dev-up.ru/method/vk.getApps",
        getStickers: "https://api.dev-up.ru/method/vk.getStickers",
        getStickerInfo: "https://api.dev-up.ru/method/vk.getStickerInfo",
        createShortLink: "https://api.dev-up.ru/method/utils.createShortLink",
        getWebInfo: "https://api.dev-up.ru/method/utils.getWebInfo",
        speech: "https://api.dev-up.ru/method/audio.speech",
        profile: "https://api.dev-up.ru/method/profile.get",
      },
    };
  }
  async call(method, params) {
    const res = await fetch(`https://api.dev-up.ru/method/${method}`, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async createShortLink(params) {
    const res = await fetch(this.settings.url.createShortLink, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async getWebInfo(params) {
    const res = await fetch(this.settings.url.getWebInfo, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async audioSpeech(params) {
    if (params && !params.url) {
      return {
        err: `The "url" parameter was not passed in the request. This parameter can be passed as follows: { url: "link to audio" }, set the correct order of parameters and try again!`,
      };
    }
    const res = await fetch(this.settings.url.speech, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async getProfile(params) {
    if (params) {
      return { err: "This method does not need parameters!" };
    }
    const res = await fetch(this.settings.url.profile, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async getApps(params) {
    if (params && !params.user_id) {
      return {
        err: 'The key parameter was not passed. Example {"user_id": number }!',
      };
    }
    const res = await fetch(this.settings.url.getApps, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async getGroups(params) {
    if (!params.user_id) {
      return {
        err: `The key parameter was not passed. Example {"user_id": number }!`,
      };
    }
    const res = await fetch(this.settings.url.getGroups, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async getStickers(params) {
    if (!params.user_id) {
      return {
        err: 'The key parameter was not passed. Example {"user_id": number }!',
      };
    }
    const res = await fetch(this.settings.url.getStickers, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
  async getStickerInfo(params) {
    if (!params.sticker_id) {
      return {
        err:
          'The key parameter was not passed. Example {"sticker_id": Number }!',
      };
    }
    const res = await fetch(this.settings.url.getStickerInfo, {
      method: this.settings.method,
      credentials: this.settings.credentials,
      body: JSON.stringify({
        key: this.settings.auth.key,
        ...params,
      }),
      headers: this.settings.headers,
    });
    this.res = await res.json();
    if (this.res.err) {
      return this.res;
    }
    return this.res.response;
  }
}
module.exports = Auth;
