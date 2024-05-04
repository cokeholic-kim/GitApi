export class Repository{
    constructor(data){
        this.data = data;
        console.log(data)
    }

    render(target){
        const tempElement = document.createElement('div');
        const html = `
        <div id="repo_componenet">
            <h2>${this.data.name}</h2>
            <div>
                <ul>
                    <li>Stars : ${this.data.stargazers_count}</li>
                    <li>Watchers : ${this.data.watchers_count}</li>
                    <li>ForksCount : ${this.data.forks_count}</li>
                    <li>Language : ${this.data.language}</li>
                </ul>
            </div>
        </div>
                
        `
        tempElement.innerHTML = html;
        target.appendChild(tempElement);
    }
}