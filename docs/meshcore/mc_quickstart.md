# MeshCore Quick Start

Welcome to MeshCore! This guide will help you set up your first **Companion Node** - a personal device that lets you send and receive messages on the MeshCore network using your phone.

!!! info "What is a Companion Node?"
    A Companion Node is your personal LoRa radio that connects to your phone via Bluetooth. Think of it as your gateway to the mesh network - it handles all the radio communication while you interact through a user-friendly app.

## What You'll Need

- A compatible LoRa radio (see [MeshCore Supported Devices](https://flasher.meshcore.co.uk/){target="_blank"})
- A USB cable to connect your radio to your computer (for flashing)
- A smartphone or computer with Bluetooth
- About 15 minutes

## Step 1: Flash Your Radio

First, you'll need to install the MeshCore firmware on your radio.

1. **Connect your radio** to your computer using a USB cable
2. **Open the MeshCore Web Flasher** at [flasher.meshcore.co.uk](https://flasher.meshcore.co.uk){target="_blank"} (Chrome-based browsers work best)
3. **Select your LoRa device** - In the Web Flasher, be sure to select the device you are flashing.
4. **Select "Companion Bluetooth"** as the device role
5. **Choose the latest firmware version** from the dropdown menu
6. **Erase device** - If the device has never used MeshCore, or if you want to erase and start over, select this option
7. **Click "Flash"** and a serial port chooser popup will appear
8. **Select your device** from the list of serial ports. If unsure which one is your radio, disconnect and reconnect the USB cable, and watch for which port appears/disappears.
9. **Wait for the process to complete** (usually 1-2 minutes)

!!! warning "Don't Disconnect During Flashing"
    Keep your radio connected until you see "Flash Complete" - unplugging during the process can cause issues.

!!! warning "Erase Device"
    DO NOT carry out a full erase if you are simply updating your MeshCore device, otherwise it will erase your MeshCore identity on that device.

Once flashing is complete, your radio will restart automatically with MeshCore installed!

## Step 2: Install the MeshCore App

Download the MeshCore app for your device:

=== "Android"
    Download from the [Google Play Store](https://play.google.com/store/apps/details?id=com.liamcottle.meshcore.android&pcampaignid=web_share){target="_blank"}

=== "iOS"
    Download from the [Apple App Store](https://apps.apple.com/us/app/meshcore/id6742354151){target="_blank"}

=== "Computer"
    Use the web interface at [app.meshcore.nz](https://app.meshcore.nz/){target="_blank"}

## Step 3: Connect to Your Radio

1. **Enable Bluetooth** on your phone
2. **Open the MeshCore app**
3. **Tap the connection icon** (in the top corner)
4. **Select your radio** from the list of available devices
    - It will appear as "MeshCore-XXXX" where XXXX is a unique identifier
5. **Wait for the connection** - you should see a "Connected" status

!!! tip "Can't See Your Radio?"
    - Make sure your radio is powered on
    - Try turning Bluetooth off and on again
    - Move your phone closer to the radio
    - Check that no other device is already connected to it

## Step 4: Configure Your Settings

Now let's set up your radio to connect to the MeshCore network.

### Set Your Name

1. Go to **Settings** in the app
2. Enter your preferred name in the **Name** field (this is how others will see you)
3. **Save** your changes

### Configure Radio Settings

To connect to the MeshCore network, use these settings:

| Setting | Value |
|---------|-------|
| **Frequency** | 910.525 MHz |
| **Bandwidth** | 62.5 kHz |
| **Spreading Factor** | 7 |
| **Coding Rate** | 5 |

!!! tip "Coding Rate"
    With MeshCore it's recommended to keep this at 5; but if you have a portable node like the T1000-E you can change this to 8 and it's 100% compatible with the 5 network; they will be able to talk to each other with different coding rates. A larger coding rate gives you better error correction for marginal links at the cost of taking more transmission time.

!!! info "Why These Settings?"
    These standardized settings ensure all devices on the MeshCore network can communicate with each other. Using different settings means you won't be able to send or receive messages from the network.

**To apply these settings:**

1. Go to **Settings** → **Radio Settings**
2. Tap **Choose Preset**, select **USA/Canada (Recommended)**
    - **Alternatively** - You can manually enter each value exactly as shown above
3. **Save** your changes
4. Your radio will restart with the new settings

### Join Network Channels

Channels on MeshCore work like chat rooms - join the channels you're interested in:

- **Public Channel** - Main MeshCore community channel (default)
- **#bot** - For interacting with MeshCore-Bot (send `t` for test data or `help` for more commands)
- **#emergency** - Emergency communications

**To join a channel:**

1. Go to the **Channels** section
2. Tap **+ Add Channel**
3. Choose the channel type you would like to add. If the channel begins with `#`, be sure to select **Join a Hashtag channel**
4. Tap **Join**

## Step 5: Send Your First Message

You're all set! Let's test your connection:

1. Select **Public Channel**
2. Type a message
3. Tap **Send**

If others are online, you should see responses. 

!!! success "You're Connected!"
    Congratulations! You're now part of the MeshCore network. Explore different channels, adjust your settings, and enjoy off-grid communication!

## Troubleshooting

### Radio Won't Flash
- Try a different USB cable (some cables are charge-only)
- Use a different USB port on your computer
- Try a different web browser (Chrome and Edge work best)

### Can't Connect via Bluetooth
- Make sure Bluetooth is enabled on both devices
- Forget and re-pair the device in your Bluetooth settings
- Restart both your radio and phone

### Not Seeing Any Messages
- Double-check your radio configuration matches exactly
- Make sure you're joined to active channels
- Try the **Public Channel** or **#bot** channel first to verify connectivity
- Your area might not have many active users yet

## Next Steps

- **Set up a Repeater** to extend the network in your area
- **Join the Discord** to connect with the Sagebrush Mesh community
- **Explore MeshCore Analyzer** to see the network map at [letsmesh.net](https://analyzer.letsmesh.net/map?lat=46.5503&long=-118.81518&zoom=6){target="_blank"}

## Need Help?

Join our [Discord community](../discord.md){target="_blank"} - we're happy to help you get connected!