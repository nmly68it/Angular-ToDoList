export class Task {
	public id : number;
	public title : string;
	public comleted : boolean;

	constructor(title : string){
		this.title = title;
		this.comleted = false;
	}
}
