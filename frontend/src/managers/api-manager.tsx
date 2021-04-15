import axios from 'axios'

export class ApiManager {
    private api_url: string = 'http://localhost:3001'

    public async getCars() {
        let url = `${this.api_url}/cars`

        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    resolve(response)
                })
                .catch(function (error) {
                    // console.log(error);
                    reject(error)
                });
        });
    }
}