function siswa( name, age){
    this.name = name;
    this.age = age;
    this.address = 'Aceh';
    this.hobbies = ['Berenang','Sepak bola'];
    this.is_married = false;
    this.list_school = [
        {
            name : 'SMK Negeri 3 Lhokseumawe',
            year_in : '2011',
            year_out : '2014',
            major : 'Akuntansi'
        },
        {
            name : 'Politeknik Negeri Lhokseumawe',
            year_in : '2014',
            year_out : '2018',
            major : 'Akuntansi Lembaga Keuangan Syariah'
        }
    ];
    this.skills = [
        {
        skill_name : 'Accounting',
        level : 'beginner'
        },
     {
        skill_name : 'HTML & CSS',
        level : 'beginer'
    }];
    this.interest_in_coding = true;

    return this;
}

let objsiswa = new siswa('M.Hanafi', 23);
console.log(objsiswa)