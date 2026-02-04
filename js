function shareInvitation() {
    const shareData = {
        title: 'Royal Birthday Invitation',
        text: 'You are invited to a royal birthday celebration!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Invitation link copied!'));
    }
}

function confirmAttendance() {
    alert("Thank you for confirming! 🎉");
}

function sendRegrets() {
    alert("Thanks for letting us know 🙏");
}
