import basvuru from './basvuru';
export default function handler(req,res){
res.status(200).json(basvuru.basvurular||[]);
}