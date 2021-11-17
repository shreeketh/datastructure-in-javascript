var numUniqueEmails = function(emails) {
    const mailSet = new Set()
    emails.forEach(mail => {
        const [name, domain] = mail.split('@')
        const receiverName = name.replaceAll('.','').split('+')[0]
mailSet.add(`${receiverName}@${domain}`)
    })
return mailSet.size
};