import axios from 'axios'
const endpoint = `https://www.thepathoftruth.com/wp-json/wp/v2/pages`
// const endpoint = 'https://demo.wp-api.org/wp-json/wp/v2/posts'

export const getTPOTFrontPage = async () => {
  // const url = `${endpoint}`
  // console.log('url', url)
  // const response = await axios.get(url, {
  //   per_page: 3,
  //   page: 1,
  //   _embed: true,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // })
  // console.log('teachings', response?.data)
  // return response?.data
}

export const getJWT = async () => {
  /** JWT Tokens */
  // useEffect(() => {
  //     let config = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         url: `https://www.thepathoftruth.com/wp-json/jwt-auth/v1/token`,
  //         // Sign-in exists only to fetch a token, then the token is used for Posting new content...
  //         params: {
  //             username: superUser['wordpress-credentials']?.email,
  //             password: superUser['wordpress-credentials']?.password
  //         }
  //     }
  //     console.log('config', config)
  //     let savedToken = localStorage.getItem("token");
  //     if (!savedToken) {
  //         axios(config as any)
  //             .then((response) => {
  //                 console.log('JWT post response:', response);
  //                 let { token } = response.data;
  //                 setToken(token);
  //                 localStorage.setItem("token", token);
  //             })
  //             .catch(console.error);
  //     }
  //     // Otherwise, set the stored token to state.
  //     else {
  //         console.log("Successfully retrieved JWT from localstorage " + savedToken);
  //         setToken(savedToken);
  //     }
  // }, [])
}

export const fetchSuperUser = async () => {
  // await doc.fetch()
  //     .then((response) => {
  //         let data = toJS(response.data);
  //         console.log('retrieved user: ', data)
  //         user = data;
  //         console.log('user', user)
  //         setSuperUser(data);
  //         /** JWT Tokens */
  //         let config = {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             url: `https://www.thepathoftruth.com/wp-json/jwt-auth/v1/token`,
  //             // Sign-in exists only to fetch a token, then the token is used for Posting new content...
  //             params: {
  //                 username: user['wordpress-credentials']?.email,
  //                 password: user['wordpress-credentials']?.password
  //             }
  //         }
  //         console.log('config', config)
  //         let savedToken = localStorage.getItem("token");
  //         if (!savedToken) {
  //             axios(config as any)
  //                 .then((response) => {
  //                     console.log('JWT post response:', response);
  //                     let { token } = response.data;
  //                     setToken(token);
  //                     localStorage.setItem("token", token);
  //                 })
  //                 .catch(console.error);
  //         }
  //         // Otherwise, set the stored token to state.
  //         else {
  //             console.log("Successfully retrieved JWT from localstorage " + savedToken);
  //             setToken(savedToken);
  //         }
  //     })
}

export const saveDraft = () => {
  /**
   * Publishes a Paper as a draft only
   */
  // const publish = async (paper: Paper, useWpapi: boolean = false): Promise<Paper> => {
  //     console.log('currentPaper', currentPaper)
  //     const config = {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //             // "Content-Type": "text/html",
  //             Authorization: `Bearer ${token}`
  //         }
  //     };
  //     const { author, id } = paper;
  //     // Check for collisions:
  //     const existingPaper = id ? await wpapi.pages()
  //         .author(author)
  //         .id(id) : false;
  //     // If existing paper, update it:
  //     if (!!existingPaper) {
  //         if (!!paper.language && paper.language.toLowerCase() !== 'english') {
  //             paper.slug = paper.language + "\/" + paper.slug + "_" + paper.language
  //         }
  //         if (useWpapi) {
  //             wpapi.pages()
  //                 .author(author)
  //                 .id(existingPaper.id)
  //                 .update(paper)
  //                 .then((response) => {
  //                     let updatedPaper = toDto(response, Paper);
  //                     paper.id = response.id; // Update the new id for UI use.
  //                     console.log('updatedPaper', updatedPaper)
  //                     setCurrentPaper(updatedPaper);
  //                 })
  //         }
  //         else {
  //             //TODO: implement an axios PUT (update) request
  //         }
  //     }
  //     // Publish paper as a new Draft:
  //     else if (!existingPaper) {
  //         wpapi._options = {
  //             ...wpapi._options,
  //             ...superUser['wordpress-credentials']
  //         }
  //         const samplePaper = {
  //             content: '<p>123xyz</p>',
  //             title: 'wpap test',
  //             slug: 'wpap-test',
  //             status: 'pending',
  //             author: 9,
  //             categories: [496],
  //             date: new Date(),
  //         }
  //         if (useWpapi) {
  //             wpapi.pages()
  //                 .create(samplePaper)
  //                 .then((response) => {
  //                     let createdPaper = toDto(response, Paper);
  //                     // paper.id = response.id; // Update the new id for UI use.
  //                     console.log('createdPaper', createdPaper)
  //                     setCurrentPaper(createdPaper)
  //                 })
  //                 .catch(console.error)
  //         }
  //         else {
  //             axios
  //                 .post(endpoint, paper, config as any)
  //                 .then((response) => {
  //                     console.log(`Post successful!`, response);
  //                     notify(`Post successful!`, 'success')
  //                     // setResponse(JSON.stringify(response));
  //                 })
  //                 .catch((err) => console.error(err));
  //         }
  //     }
  //     return currentPaper;
  // }
}
