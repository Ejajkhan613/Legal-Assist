let data = JSON.parse(localStorage.getItem("lawyer"));
let token = localStorage.getItem("token")
document.querySelector("#name").innerText = data.name
document.querySelector("#type").innerText = data.type
let ldesc = {
    "Civil Lawyer": "A civil lawyers generally deals with legal disputes concerning personal injury, family relationships, employment and real estate. They also work with government entities and business institutions. Individuals, interpersonal ties, and property conflicts are frequently the centre of civil disputes. A civil lawyer attempts to settle problems and disagreements amongst the parties involved.",
    "Criminal Lawyer": "A criminal lawyers prosecutes or defends individuals who are accused of committing crimes. The responsibilities of a criminal lawyer include research and case analysis to identify a likely result and create a winning courtroom defence plan for clients, assisting clients to grasp the meaning of the law and their legal alternatives, pursuing a swift and favorable resolution of matters.",
    "Corporate Lawyer": "Corporate lawyers generally deal in commercial laws. They are responsible for ensuring business dealings adhere to corporate laws and rules. They generally work with law firms or companies’ legal teams. Corporate lawyers perform the following duties such as prepare the appropriate legal documents for trial or court proceedings, evaluate new business partnerships with vendors and subcontractors, represent the company in legal proceedings, design and oversee the company’s policy and position on legal matters, protect the company against legal risks and violations, etc.",
    "Family Lawyer": "Family lawyers is a licensed legal practitioner who manages disputes among families. They deal in matters related to divorce, adoption, guardianship, and emancipation cases. They are responsible for overseeing family estates, monitoring mediation sessions, and offering legal advice.",
    "Tax Lawyer": "Tax lawyers help their clients in resolving tax-related disputes. They may also work in the government sector or serve as corporate in-house counsel. They dispense the following legal duties such as to provide guidance on how to structurize the purchase and sale of a business by looking at the seller's debts, liabilities, finances and assets, monitor legislative developments and advise clients with respect to the potential impact of pending legislation on their businesses and their personal finances, etc.",
    "Intellectual Property Lawyer": "Intellectual property lawyers perform wide range of duties like drafting contracts and non-disclosure agreements that protect client’s intellectual property rights, representing clients in court cases when needed, negotiating settlements with opposing counsel on behalf of clients.",
    "Cyber Lawyer": "Cyber lawyers deals with cases of cyber crimes like software piracy, hacking, cracking of software, credit card frauds, malfunction viruses, cyber-attacks & threats, etc. The main function of cyber lawyers is to investigate on a security breach violation, formulate reports to document security breaches and the degree of the damage caused, etc.",
    "Environmental Lawyer": "Environmental lawyers ensure that companies and individuals follow environmental laws. Environmental lawyers are responsible for a wide range of duties, including drafting contracts and business agreements, including leases, licenses, purchase agreements, and partnership agreements, communicating with clients, witnesses, regarding case details and strategies, negotiating settlements on behalf of their clients in cases it involves environmental damage claims.",
    "Estate Planning Lawyer": "Estate planning lawyers are experienced and licensed law professionals with a thorough understanding of the state and federal laws that affect how your estate will be valued, dispersed, and taxed after your death. In addition to educating you about the probate process, an estate planning attorney can assist you with the following tasks such as creating a will, designating your beneficiaries, establishing durable power of attorney and medical durable power of attorney, finding ways to reduce and avoid estate tax when possible, finding ways to avoid the probate court process etc.",
    "Workers Compensation Lawyer": "Worker's compensation lawyers represent their clients involved in legal disputes regarding legal injuries sustained on the job, including both the workers and companies. They also negotiate settlements and ensure funds awarded by courts are actually paid. Worker's compensation lawyers may be called upon to argue on behalf of an injured worker seeking fair repayment or may defend companies in cases where someone is attempting to dishonestly take advantage of the benefits system. In addition to this they may help clients by providing them with legal advice in an effort to determine whether or not to go to court and engaging in negotiations with the other side in the event that a settlement agreement seems possible.",
    "Public Interest Lawyer": "Public interest lawyers work on a wide range of civil rights matters, including on issues involving discrimination based on race, ethnicity, or sexual orientation; gender issues; the rights of disabled people, whether involving physical or mental disabilities; or issues involving human rights abuses. Public interest lawyers also represent people facing eviction and homelessness, fighting for fair wages or to receive government benefits, and struggling with workplace issues. Survivors of domestic violence, people with family law or immigration issues, and people facing criminal proceedings (on probation or currently incarcerated) turn to public interest lawyers for assistance as well.",
    "Medical Malpractice Lawyer": "A medical malpractice attorney helps clients with claims regarding injuries they suffer due to mistakes made by doctors, nurses, dentists, therapists, technicians, and other medical professionals and health care providers. Those mistakes can include surgical errors, birth trauma, injuries from inappropriate treatment methods, misdiagnoses, unnecessary delays in treatment, or a failure to get proper consent for treatment from a patient.",
    "Merger and Acquisition Lawyer": "Merger and acquisition lawyer roles and responsibilities includes drafting the necessary contracts with all the parties involved in the business transaction, negotiating the best terms possible, and ensuring that all the documents are properly executed, and filed where appropriate. Some business deals will also require permission from regulatory authorities or other government entities. The legal issues that a merger and acquisition lawyer deal with are - human resource issues, financing and tax implications, regulatory agency concerns, intellectual property, indemnification issues etc.",
    "Bankruptcy Lawyer": "Bankruptcy attorneys specialize in helping their clients use the court system to reduce or eliminate debts, file for bankruptcy, or seek unpaid debts. They can work with individuals or with businesses, representing debtors, creditors, creditors’ committees, or bankruptcy trustees. Bankruptcy attorneys work in and out of the courtroom, either creating debt restructuring plans for debtors to help them relieve debts or trying to extract as much owed money as possible from debtors on behalf of creditors.",
    "Securities Lawyer": "Securities attorneys represent clients with respect to stocks, mutual funds, bonds, and other financial instruments. This work is primarily divided into three broad areas—transactional practice, regulatory practice, and litigation. Securities lawyers also frequently represent corporate clients in the transactional work involved with initial public offerings, private sales of securities, issuance of stock or other securities and mergers and acquisitions. In this capacity, they also assist companies in complying with securities laws and regulations, which ultimately serve to benefit consumers.",
    "Military Lawyer": "Military lawyers also know as Judge Advocate General (JAG) offer military legal assistance, particularly, advice on military law to the presiding officers of court-martial. The duty of a military lawyer in their day-to-day roles is like a civilian lawyer. The main distinction is the representation of the client under military tribunals and legislation. The military officers deal with and can be represented in civil and criminal proceedings solely by military lawyers. JAG officers are equivalent to the rank of lieutenant and are masters in the application of Military Laws, from drafting to presenting the cases before the courts and military tribunals.",
    "Labour Lawyer": "A labor attorney assists clients with legal issues arising from the relationship between employers and employees. They interpret and advise clients on wage and working hour laws, workplace safety, laws regarding rest and breaks, disability and leave requirements, workplace harassment, discrimination, and wrongful termination. Labor attorneys can work for private firms, government agencies, labor unions, or on staff for companies, and can represent either employers or workers or both.",
    "Contract Lawyer": "Contract lawyers specialize in drafting and reviewing legal contracts. These contracts can be for both businesses and individuals. Examples of business legal contracts include sales contracts, supplier contracts, nondisclosure agreements, partnership agreement, employment agreements and joint venture agreements. Examples of personal contracts include power of attorneys, residential leases, and home purchase agreements.",
    "Government Lawyer": "A professional who works for the government is known as a government lawyer. They are trained certified lawyers who offers legal counsel to government ministers and administrative personnel. A government lawyer is in charge of addressing a variety of duties, including prosecuting criminal offences, making regulations, counselling local authorities, and resolving policy matters. In addition to advising government officials on a variety of legal matters, they also represents the government in court. They assists numerous government entities while also upholding local and municipal laws.",
    "Immigration Lawyer": "The roles and responsibilities of an immigration lawyer includes giving clients legal advice on a range of topics linked to both legal and illegal immigration is one of an immigration lawyer's job duties. He or she aids in completing legal requirements for the issuance of work permits and different visas, such as medical, tourist, and business visas. He or she offers assistance to foreign persons who are unsure about their legal Indian citizenship or who need visas to enter the country."

}

document.querySelector("#ld").innerText = ldesc[`${data.type}`];

    ; (async () => {
        let res = await (await fetch(`https://breakable-deer-earrings.cyclic.app/avail/slots/${data.id}`, {
            headers: {
                "Authorization": token
            }
        })).json();
        let Html = ""
       
            res.map(slot => {
                let date = slot.date.split("T")
                if(slot.available){
                  Html += `
        <input type="radio" name="Slots" id="${slot._id}" required>
        <div id="Slot">
        <div>${slot.time}</div>
        <div>${date[0]}</div>
        </div>
        </input>
        `  
                }})
                
        if (Html==""){
            Html = "<h3>No Slot Available</h3>"
            document.getElementById("Submit").setAttribute('disabled', '');
        }

        document.getElementById("slots").innerHTML = Html
    })()

document.getElementById("Submit").addEventListener("click",async(e)=>{
    let description=document.getElementById("Description").value;
    let slots=document.querySelectorAll("#slots input");
    let slotID=""
    for(let i of slots){
        if(i.checked){
            slotID=i.id
        }
    }
    if(description!==""&&slotID!==""){
        e.preventDefault();
        let payload={
        description,slotID,lawyerID:data.id,username:localStorage.getItem("name")
    }
    let res = await fetch("https://breakable-deer-earrings.cyclic.app/book/", {
        method: "POST",
        headers: {
            "authorization": token,
            "Content-Type":"application/json"
        },body: JSON.stringify(payload)  
    })
    res=await res.json()
    alert(res.msg)
    window.location="./userBooking.html"
    }
    
    console.log(payload)
})
