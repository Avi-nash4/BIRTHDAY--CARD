# BIRTHDAY--CARD
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Birthday Invitation</title>

    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cinzel:wght@400;700&display=swap" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body class="py-8 px-4">

<div class="max-w-4xl mx-auto invitation-card royal-border rounded-2xl p-8 md:p-12 bg-white">

    <!-- Header -->
    <div class="text-center mb-8">
        <div class="crown-icon text-4xl md:text-6xl gold-text mb-4">👑</div>
        <h1 class="text-3xl md:text-5xl font-bold gold-text mb-2">Royal Birthday Celebration</h1>
        <p class="text-gray-600 text-lg">You are cordially invited to a majestic celebration</p>
    </div>

    <!-- Video Section -->
    <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-semibold text-center gold-text mb-6">
            A Special Video Invitation
        </h2>

        <div class="video-container rounded-lg">
            <iframe 
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    </div>

    <!-- Family Photos -->
    <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-semibold text-center gold-text mb-8">
            Our Royal Family
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="text-center">
                <div class="photo-frame rounded-lg p-2 mb-3">
                    <img src="GRANDMOTHER.jpg" class="w-full h-64 object-cover rounded">
                </div>
                <h3 class="font-semibold text-lg gold-text">The Birthday Prince</h3>
            </div>

            <div class="text-center">
                <div class="photo-frame rounded-lg p-2 mb-3">
                    <img src="father.jpg" class="w-full h-64 object-cover rounded">
                </div>
                <h3 class="font-semibold text-lg gold-text">The Royal Parents</h3>
            </div>

            <div class="text-center">
                <div class="photo-frame rounded-lg p-2 mb-3">
                    <img src="IMG20231204085456.jpg" class="w-full h-64 object-cover rounded">
                </div>
                <h3 class="font-semibold text-lg gold-text">The Grand Monarchs</h3>
            </div>

        </div>
    </div>

    <!-- Event Details -->
    <div class="mb-12 text-center">
        <h2 class="text-2xl md:text-3xl font-semibold gold-text mb-6">Event Details</h2>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded space-y-3 text-lg">
            <p><span class="font-semibold gold-text">Date:</span> 19 February 2026</p>
            <p><span class="font-semibold gold-text">Time:</span> 7:00 PM</p>
            <p><span class="font-semibold gold-text">Venue:</span> KHODOVELLY Q.NO 91</p>
        </div>
    </div>

    <!-- RSVP -->
    <div class="mb-12 text-center">
        <h2 class="text-2xl md:text-3xl font-semibold gold-text mb-6">Birthday Invitation</h2>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button onclick="confirmAttendance()" class="share-btn bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-full font-semibold">
                Confirm Attendance
            </button>

            <button onclick="sendRegrets()" class="share-btn border-2 border-yellow-600 text-yellow-700 px-8 py-3 rounded-full font-semibold">
                Send Regrets
            </button>
        </div>
    </div>

    <!-- Share -->
    <div class="text-center">
        <button onclick="shareInvitation()" class="share-btn bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
            📧 Share Invitation Link
        </button>
        <p id="shareLink" class="text-sm text-gray-500 mt-2"></p>
    </div>

    <!-- Footer -->
    <div class="text-center mt-12 pt-6 border-t">
        <p class="text-gray-600">We look forward to celebrating with you!</p>
        <p class="text-sm text-gray-500 mt-2">© 2026 Royal Birthday Celebration</p>
    </div>

</div>

<!-- JS -->
<script src="script.js"></script>
</body>
</html>
