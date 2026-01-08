# MediumFast Quick Start

Welcome to the MediumFast preset guide! This configuration is used specifically for the **Tri-Cities area** of the Sagebrush Mesh network, offering a good balance between range and speed.

!!! info "What is MediumFast?"
    MediumFast is a Meshtastic modem preset that provides faster message delivery while maintaining good range. It's used exclusively in the Tri-Cities area of the Sagebrush Mesh network.

!!! warning "Tri-Cities Only"
    MediumFast is only used in the Tri-Cities area. If you're outside the Tri-Cities, use [LongFast](longfast.md) instead.

## What You'll Need

- A Meshtastic-compatible LoRa radio (already flashed with Meshtastic firmware)
- The Meshtastic app on your phone or computer
- About 10 minutes to configure

## Step 1: Install the Meshtastic App

Download the Meshtastic app for your device:

=== "Android"
    Download from the [Google Play Store](https://play.google.com/store/apps/details?id=com.geeksville.mesh){target="_blank"}

=== "iOS"
    Download from the [Apple App Store](https://apps.apple.com/us/app/meshtastic/id1586432531){target="_blank"}

=== "Computer"
    Use the web interface at [client.meshtastic.org](https://client.meshtastic.org/){target="_blank"}

## Step 2: Connect to Your Radio

1. **Enable Bluetooth** on your phone
2. **Open the Meshtastic app**
3. **Tap the connection icon** or go to the Bluetooth pairing screen
4. **Select your radio** from the list of available devices
5. **Wait for the connection** - you should see a "Connected" status

!!! tip "Can't See Your Radio?"
    - Make sure your radio is powered on
    - Try turning Bluetooth off and on again
    - Move your phone closer to the radio
    - Check that no other device is already connected to it

## Step 3: Configure Your Radio

Now let's set up your radio to connect to the MediumFast network in the Tri-Cities.

### Set Your Name

1. Go to **Settings** in the app
2. Find **Device** settings
3. Enter your preferred name in the **Long Name** field (this is how others will see you)
4. Set a short name in the **Short Name** field (4 characters, used on small displays)
5. **Save** your changes

### Configure Radio Settings

To connect to the Tri-Cities Meshtastic network using MediumFast, use these settings:

| Setting | Value |
|---------|-------|
| **Modem Preset** | MEDIUM_FAST |
| **Frequency Slot** | 45 (913.125 MHz) |
| **Region** | US |

!!! info "Why These Settings?"
    These standardized settings ensure all devices on the Tri-Cities network can communicate with each other. Using different settings means you won't be able to send or receive messages from the network.

**To apply these settings:**

1. Go to **Settings** → **Radio Configuration** (or **LoRa**)
2. Set **Region** to **US**
3. Set **Modem Preset** to **MEDIUM_FAST**
4. Set **Frequency Slot** to **45**
5. **Save** your changes

### Configure Device Role

Set your device role based on how you'll use it:

| Setting | Value |
|---------|-------|
| **Device Role** | CLIENT (recommended) |
| **Max Hops** | 3 |

**To apply these settings:**

1. Go to **Settings** → **Device** → **Device Role**
2. Select **CLIENT** (this allows your device to relay messages for others)
3. Go to **Settings** → **Radio Configuration** → **LoRa** → **Max Hops**
4. Set **Max Hops** to **3**
5. **Save** your changes

!!! tip "About Device Roles"
    **CLIENT** is the standard role that allows your device to send, receive, and relay messages for others, helping build the mesh network. If you want to reduce broadcasts from your node, consider using **CLIENT_MUTE**, but note that CLIENT_MUTE will NOT forward packets from others.

### Configure Broadcast Intervals

Set how often your node announces itself to the network:

1. Go to **Settings** → **Device**
2. Set **Node Info Broadcast Interval** to **10800 seconds** (3 hours)
3. **Save** your changes

!!! tip "Why 3 Hours?"
    Broadcasting node info every 3 hours keeps the mesh aware of your device without creating unnecessary traffic.

### Configure Position Settings (Recommended)

For best mesh network performance:

1. Go to **Settings** → **Position**
2. Set **GPS Mode** to **ENABLED** (if your device has GPS)
3. **Smart Broadcast** should be enabled (default) - this sends your position only when you've moved at least 100 meters
4. Set **Broadcast Interval** to **3600 seconds** (1 hour)
   - This balances map visibility with reduced network congestion
   - Smart broadcast will still send updates when you move significantly
5. For **fixed nodes** (rooftop/permanent): Enable **Fixed Position** and manually set your coordinates
6. **Save** your changes

!!! tip "Why These Settings?"
    Position updates every hour combined with smart broadcasting gives the network good location data without flooding the mesh with constant updates.

### Optional: MQTT Integration

MQTT allows your node to appear on community maps and share data with the wider network. However, there's a trade-off to consider:

!!! info "MQTT Trade-offs"
    **Benefits**: Your node appears on maps, data is archived, and you can see the wider network

    **Drawbacks**: MQTT traffic can add congestion to the mesh network. Some mesh communities disable MQTT entirely to strengthen local RF communications.

    For Sagebrush Mesh, MQTT is optional. If you choose to enable it, always keep downlink disabled.

**To enable MQTT (optional):**

1. Go to **Settings** → **MQTT**
2. Enable **MQTT**
3. Set **MQTT Server** to **meshtastic.pugetmesh.org**
4. Enable **MQTT Uplink**
5. **Disable MQTT Downlink** (critical!)
6. Enable **OK to MQTT**
7. **Save** your changes

!!! warning "Keep Downlink Disabled"
    Always keep **MQTT Downlink** set to **FALSE** to prevent flooding the mesh with messages from the internet. Busy MQTT servers can overwhelm nodes and hinder local communications.

## Step 4: Join the Network

You're all set! Your radio is now configured for the Tri-Cities Meshtastic network.

1. Open the **Messages** tab in the app
2. You should start seeing messages from other nodes
3. Send a test message to say hello!

!!! success "You're Connected!"
    Congratulations! You're now part of the Tri-Cities Meshtastic network using MediumFast. Enjoy faster messaging with good range!

## Troubleshooting

### Not Seeing Other Nodes

- Verify you're using **MEDIUM_FAST** preset
- Check your **frequency slot** is set to **45** (913.125 MHz)
- Confirm **Region** is set to **US**
- Make sure you're in the Tri-Cities area where MediumFast is used
- Check that your antenna is properly connected

### Can't Connect via Bluetooth

- Make sure Bluetooth is enabled on both devices
- Forget and re-pair the device in your Bluetooth settings
- Restart both your radio and phone
- Try factory resetting the radio and start over

### Messages Still Seem Slow

- MediumFast is faster than LongFast but still takes about 1 second per transmission
- Check that you're actually using MEDIUM_FAST (verify Spreading Factor is 9)
- Make sure your max hops is set to 3 to avoid excessive retransmissions

## Next Steps

- **Optimize placement** - Get your antenna up high for best range
- **Join the Discord** - Connect with the Sagebrush Mesh community at our [Discord](../discord.md)
- **Explore the map** - See the network at [PugetMesh Map](https://meshtastic.pugetmesh.org/){target="_blank"}
- **Add a fixed node** - Help extend the network in your area

## Need Help?

Join our [Discord community](../discord.md) - we're happy to help you get connected!

---

*Configuration based on [PugetMesh standards](https://pugetmesh.org/meshtastic/config/){target="_blank"}*
