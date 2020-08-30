import Unsplash from "unsplash-js";

//Этот класс помогает работать с unsplash, сюда выносим все методы работы с API unsplash, а на ружу даем только контекст

let bearer = localStorage.getItem("unsplash-bearer");

let unsplashContext;
if (bearer) {
    unsplashContext = new Unsplash({
        accessKey: "1IygZQqrKpbqr2czs70Fk87DDNiZZ4wbc3m3jipPuUA",
        secret: "xGkmgPoI0q5l3_lIL2aen3rI0RnfU6tgRnipnVLRCKQ",
        callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
        bearerToken: bearer
    });
} else {
    alert("!!!");
    unsplashContext = new Unsplash({
        accessKey: "1IygZQqrKpbqr2czs70Fk87DDNiZZ4wbc3m3jipPuUA",
        secret: "xGkmgPoI0q5l3_lIL2aen3rI0RnfU6tgRnipnVLRCKQ",
        callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });

    const authenticationUrl = unsplashContext.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);

    let code = window.location.search.split('code=')[1]; 
    if (!code) {
        window.location.assign(authenticationUrl);
    } else {
        unsplashContext.auth.userAuthentication(code)
            .then(res => res.json())
            .then(json => {
                localStorage.setItem("unsplash-bearer", json.access_token);
                unsplashContext.auth.setBearerToken(json.access_token);
            });
    }
}

export default unsplashContext;