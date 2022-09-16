const axios=require('axios');
exports.homepage= async(req,res)=>{
    try {

  
        const ans='https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=9e7a233e&app_key=4904e43930836cc2735e549d77eef526&results_per_page=5&what_or=full%20stack%20backend%20developer&salary_min=5000&salary_max=2000000&sort_by=date';
        var respon= await axios.get(ans)
        res.render('index',{jobs:respon.data.results});
        
    } catch (error) {
        res.render('404')
        
        
    }

}

exports.searchjobs= async(req,res)=>{
    let name=req.body.jobtitle;
    let xname=name  
    name=name.replace(" ","%20");
    let place=req.body.place;
    let pagenum=req.body.pagenum;
    let sortbyy=req.body.sortbyy;
    let salarymin=req.body.minsalary;
    let salarymax=req.body.maxsalary;
    var filterapplied=req.body.filterapplied;

      try {

  
        const ans='https://api.adzuna.com/v1/api/jobs/in/search/'+pagenum+'?'+'app_id='+'9e7a233e'+'&app_key='+'4904e43930836cc2735e549d77eef526'+'&results_per_page=20&what='+name+'&where='+place+'&max_days_old=60&sort_by='+sortbyy+'&salary_min='+salarymin+'&salary_max='+salarymax+'';
        var respon= await axios.get(ans)
        var totaljobs=respon.data.count;
        var totalpages=totaljobs/20;
        totalpages=Math.ceil(totalpages);

        res.render('job_listing', {sortbyy:sortbyy,salarymax:salarymax,salarymin:salarymin,name:xname,place:place,jobs:respon.data.results,count:respon.data.count,pagenum:pagenum,totalpages:totalpages,filterapplied:filterapplied})

        
    } catch (error) {
        res.render('404')
        
        
    }

    


}

exports.contact= async(req,res)=>{
    try {
        res.render('contact')
        
    } catch (err) {
        res.render('404')
        
    }


}

exports.about= async(req,res)=>{
    try {
        res.render('about')
        
    } catch (err) {
        res.render('404')
        
    }
}


exports.handleError= (req,res)=>{
        res.render('404')
}