export class User {
    constructor(data){
        this.data = data;
        console.log(data);
    }

    render(target){
        const html = `
            <div>
                <div class="img">
                    <img src="${this.data.avatar_url}" alt="유저사진">
                    <p>name : ${this.data.name}</p>
                </div>
            </div>
            <div>
                <div class="user_badges">
                    <ul>
                        <li>Public Repos: ${this.data.public_repos}</li>
                        <li>Public Repos: ${this.data.public_gists}</li>
                        <li>Public Repos: ${this.data.followers}</li>
                        <li>Public Repos: ${this.data.following}</li>
                    </ul>
                </div>
                <div class="uesr_information">
                    <ul>
                        <li>Company: ${this.data.company}</li>
                        <li>Blog: ${this.data.blog}</li>
                        <li>Location: ${this.data.location}</li>
                        <li>Member Since: ${this.data.created_at}</li>
                    </ul>
                </div>
            </div>
        `
        target.innerHTML = html;
        console.log(target)
    }
}