let basvurular=[];
export default function handler(req,res){
if(req.method!=="POST") return res.status(405).end();
basvurular.push(req.body);
res.status(200).json({ok:true});
}