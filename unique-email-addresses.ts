{
    const numUniqueEmails = function(emails) {
        return new Set(emails.map(email => {
            const [local, domain] = email.split('@')

            return `${local.split('+')[0].split('.').join('')}@${domain}`
        })).size
    };
}