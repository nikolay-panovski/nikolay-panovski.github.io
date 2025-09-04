

function Contacts() {
    return (
        <>
            <h2 className='text-center font-bold mx-auto my-8 text-3xl'>Contacts</h2>
            <p className='text-center mx-auto my-6 text-lg'>Looking forward to hearing from you!</p>
            <div className="flex flex-row justify-center items-center mt-4 mb-8">
                <a className="pr-4" href="https://www.linkedin.com/in/nikolay-panovski-043892201/"><img src="/images/contacts/icon_linkedin.png" alt="Logo LinkedIn" width="40px" height="40px"></img></a>
                <a className="pr-4" href="https://github.com/nikolay-panovski"><img src="/images/contacts/icon_github.png" alt="Logo GitHub" width="40px" height="40px"></img></a>
                <a className="pr-4" href="mailto:nikipanovski@gmail.com"><img src="/images/contacts/icon_gmail_black.png" alt="Logo Gmail" width="40px" height="40px"></img></a>
                {/**
                <a href="https://www.youtube.com/channel/UC4fmr8aSS2vq-0q2dxY6TRQ"><img src="/images/contacts/logo_yt.png" alt="Logo YouTube" width="40px" height="40px"></img></a>
                /**/}
            </div>
        </>
    );
}


export default Contacts;