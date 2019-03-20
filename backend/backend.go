package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "net/url"
    "errors"
    "strings"
	// "github.com/JustinBeckwith/go-yelp/yelp"
)

func redirectPolicyFunc(req *http.Request, via []*http.Request) error {
	return errors.New("Don't redirect!")
}

func main() {
    fmt.Println("Starting the application...")
    
	client := &http.Client{
		CheckRedirect: redirectPolicyFunc,
    }
    
    data := url.Values{}
    data.Set("Location", "San Francisco")
	var bearer = "Bearer " + "nJvRCUJ94q0VVptIYGXzrzauyTaITN9k2mHFyquWt_8-t_zS6Mdit2TmDw_Wtaw-5dYTUjHzw2v0uihDjEt8x8a_1LBv34IDp8RgVztNzVBNOrmyQNT42z8amWSIXHYx"
    req, err := http.NewRequest("GET", "https://api.yelp.com/v3/businesses/search", strings.NewReader(data.Encode()))

  

    
    req.Header.Add("Authorization",bearer)

    fmt.Println(req)

    resp, err := client.Do(req)
    if err != nil {
        fmt.Printf("The HTTP request failed with error %s\n", err)
    } else {
        data, _ := ioutil.ReadAll(resp.Body)
        fmt.Println(string(data))
    }
    // jsonData := map[string]string{"firstname": "Nic", "lastname": "Raboy"}
    // jsonValue, _ := json.Marshal(jsonData)
    // response, err = http.Post("https://httpbin.org/post", "application/json", bytes.NewBuffer(jsonValue))
    // if err != nil {
    //     fmt.Printf("The HTTP request failed with error %s\n", err)
    // } else {
    //     data, _ := ioutil.ReadAll(response.Body)
    //     fmt.Println(string(data))
    // }
    fmt.Println("Terminating the application...")
}