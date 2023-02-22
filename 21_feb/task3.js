
/*----------------------------------------Array of Objects and it's Methods-------------------------------------*/


ArrayofObjects = () => {

    alert("Kindly Visit The Console...");

    const companies = [                                                            // Array of Objects.
        { name: "Company One", category: "Finance", start: 1981, end: 2003 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];



    const ages = [33, 12, 20, 15, 7, 63, 21, 44, 61, 13, 58, 25, 32];               // Simple Array.



    
    //------------------------------- using forEach ------------------------------

    companies.forEach(function (company) {
        console.log(company.name);
    });



    //-------------------------------- Filter method------------------------------

    const canDrink = ages.filter(age => age >= 21);
    console.log(canDrink);

    //Filtering Retail Companies...

    const retailCompanies = companies.filter(company => company.category === 'Retail');
    console.log(retailCompanies);

    // Filtering companies of 80's...
    const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.end < 1990);
    console.log(eightiesCompanies);



    //--------------------------------Map() Method---------------------------------

    const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
    console.log(testMap);

    const ageMap = ages
        .map(age => Math.sqrt(age))
        .map(age => age * 2);
    console.log(ageMap);



    //---------------------------------Sort() Method----------------------------

    // Sorting companies by start year..
    const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
    console.log(sortedCompanies);

    //Sorting ages...
    const sortAges = ages.sort((a, b) => a - b);
    console.log(sortAges);



    //----------------------------------Reduce() Method----------------------------
    /*
      let ageSum = 0;
      for(let i = 0; i < ages.length; i++){
        ageSum += ages[i];
      }
    */

    const ageSum = ages.reduce((Total, age) => Total + age, 0);
    console.log(ageSum);

    //Get total years for companies...
    const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
    console.log(totalYears);

    //----------------------------------Reverse() Method----------------------------
    
    const revAges = ages.reverse();
    console.log(revAges);

    //--------------------Random sorting using The Fisher Yates Method--------------
    
    randomsort =() => {
      const copy = ages;
      for (let i = copy.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = copy[i];
        copy[i] = copy[j];
        copy[j] = k;
      }
      console.log(copy);
    }

    setTimeout( () => {
      randomsort();
    }, 1000);
    setTimeout( () => {
      randomsort();
    }, 2000);
    setTimeout( () => {
      randomsort();
    }, 3000);
    setTimeout( () => {
      randomsort();
    }, 4000);


    //-------------------------------Max and Min elements------------------------------

    const maxAge = Math.max.apply(null,ages);
    console.log("Max Age is:" + maxAge);

    const minAge = Math.min.apply(null,ages);
    console.log("Min Age is:" + minAge);


}