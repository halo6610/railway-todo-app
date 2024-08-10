/*
limitのフォーマット「YYYY-MM-DDTHH:MM:SSZ」に気を付けてください。
例）2022-07-15T11:11:11Z
*/
export const time={
	getNow(){
		const now=new Date()-new Date().getTimezoneOffset()*60*1000
		return new Date(now).toISOString().split('.')[0]+"Z"
	},
	toLimit(limit){
		try {
			//const limit=Date.parse(limit)
			//-540*60*1000
			const now=new Date()-new Date().getTimezoneOffset()*60*1000
			const toLimit=Date.parse(limit)-now
			if(toLimit>0){
				const minute=Math.floor(toLimit%(1000*60*60)/(1000*60))
				const hour=Math.floor(toLimit%(1000*60*60*24)/(1000*60*60))
				const day=Math.floor(toLimit/(1000*60*60*24))
				return `残り${day}日${hour}時間${minute}分`
			}else{
				return `期限を過ぎています`
			}
		} catch (error) {
			console.log(error)
			return `不明な残り時間`
		}
	},
	showLimit(limit){
		//フォーマット
		let date=(new Date(limit).toLocaleString('ja-JP')).split(':')
		return date[0]+"時"+date[1]+"分"
	}
}
/*
console.log(time.getNow())
console.log(time.toLimit("2024-09-15T11:11"))
console.log(time.showLimit("2024-09-15T11:11"))

console.log(new Date())
console.log(Date.parse("2022-07-15T11:11:11Z"))
*/
