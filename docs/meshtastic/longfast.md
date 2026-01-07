# LongFast Configuration

Welcome to the LongFast preset guide! This is the **default** Meshtastic configuration, designed to provide maximum range right out of the box. If you're just getting started with Meshtastic, your device is likely already using this preset.

!!! info "What is LongFast?"
    LongFast is Meshtastic's default modem preset optimized for maximum range and reliability. It uses conservative radio settings that work well for small to medium-sized networks where range is more important than speed.

## What You'll Need

- A Meshtastic-compatible LoRa radio (already flashed with Meshtastic firmware)
- The Meshtastic app on your phone or computer
- About 10 minutes to configure

## Quick Overview

### Technical Specifications

| Setting | Value |
|---------|-------|
| **Modem Preset** | LONG_FAST |
| **Bandwidth** | 250 kHz |
| **Spreading Factor** | 11 |
| **Coding Rate** | 4/8 |
| **Data Rate** | ~1 kbps |
| **Link Budget** | ~153 dB |

### Performance Characteristics

- **Range**: Maximum (5-15+ miles / 8-24+ km in ideal conditions)
- **Message Speed**: Slower (~2-4 seconds per transmission)
- **Airtime**: Higher (longer transmissions)
- **Best For**: Rural areas, long-distance communication, smaller networks (<60 nodes)

!!! tip "Already Configured!"
    If you haven't changed your settings, your Meshtastic device is already using LongFast by default - no configuration needed!

## When to Use LongFast

Choose LongFast when:

- **Maximum range is your priority** - You need to communicate over long distances
- **Small to medium network** - Your mesh has fewer than 60 active nodes
- **Rural deployments** - Nodes are spread far apart across open terrain
- **Getting started** - It's the recommended default for new users
- **Reliable connectivity** - You prefer stability over speed

## Configuring LongFast

### Using the Meshtastic App

=== "Step 1: Open Settings"
    1. Connect to your Meshtastic device
    2. Tap the **Settings** icon
    3. Select **Radio Configuration** (or **LoRa**)

=== "Step 2: Select Preset"
    1. Find **Modem Preset** in the radio settings
    2. Select **LONG_FAST** from the dropdown
    3. The app will automatically set:
        - Bandwidth: 250 kHz
        - Spreading Factor: 11
        - Coding Rate: 4/8

=== "Step 3: Set Frequency (Optional)"
    **For Sagebrush Mesh / Puget Sound Area:**

    Set your frequency slot to match your local network:

    - **Frequency Slot**: 20
    - **Actual Frequency**: 906.875 MHz

    !!! info "Regional Standardization"
        Different mesh communities may use different frequency slots. Check with your local mesh group for their recommended slot.

=== "Step 4: Save & Restart"
    1. Tap **Save** or **Apply**
    2. Your device will restart with the new settings
    3. Wait about 30 seconds for the reboot to complete

!!! warning "Network Compatibility"
    To communicate with others on a mesh network, **all devices must use identical settings** for Region and Modem Preset. Always verify your local mesh's configuration standards.

## Advanced Configuration

### Recommended Node Settings

For optimal performance on the Sagebrush Mesh network, configure these additional settings:

#### Fixed Nodes (Rooftop/Permanent Installations)

| Setting | Recommended Value |
|---------|------------------|
| **Role** | CLIENT or CLIENT_MUTE |
| **Hop Limit** | 3 |
| **Node Info Broadcast** | 10800 seconds (3 hours) |
| **Position Broadcast** | 18000 seconds (5 hours) |
| **Fixed Position** | TRUE |
| **GPS Mode** | ENABLED (or use Fixed Position) |

#### Portable Nodes (Handheld/Mobile)

| Setting | Recommended Value |
|---------|------------------|
| **Role** | CLIENT_MUTE (recommended) |
| **Hop Limit** | 3 |
| **Node Info Broadcast** | 1200-3600 seconds |
| **Position Broadcast** | 1200-3600 seconds |
| **Fixed Position** | FALSE |
| **GPS Mode** | ENABLED |

!!! tip "About Hop Limit"
    A "hop" is one node relaying your message to another. **Hop Limit of 3** allows messages to travel through up to 3 intermediate nodes, covering many miles while minimizing network congestion. Use the lowest hop count that meets your needs.

### MQTT Integration

To see your node on community maps and share data with the wider network:

| Setting | Value |
|---------|-------|
| **MQTT Enabled** | TRUE |
| **MQTT Server** | meshtastic.pugetmesh.org |
| **MQTT Uplink** | TRUE |
| **MQTT Downlink** | FALSE |
| **OK to MQTT** | TRUE |
| **Map Report Interval** | 3600 seconds (fixed) / 300 seconds (portable) |

!!! warning "Downlink Disabled"
    Keep **MQTT Downlink** set to **FALSE** to prevent flooding the mesh with messages from the internet. This helps maintain network quality for local communications.

## Understanding LongFast Performance

### Why LongFast is Slower

LongFast achieves maximum range by:

- **High Spreading Factor (11)**: Spreads data over more time for better reception
- **Strong Error Correction**: Uses coding rate 4/8 for robust error correction
- **Lower Data Rate**: Transmits at ~1 kbps vs. 3+ kbps on faster presets

Each step up in Spreading Factor:
- Doubles the airtime to transmit
- Adds approximately 2.5 dB to link budget (improves range)

### Range Expectations

Real-world range depends on many factors:

- **Terrain**: Hills and buildings reduce range
- **Antenna Quality**: Better antennas = better range
- **Elevation**: Higher placement dramatically improves range
- **Interference**: Urban areas have more RF noise

**Typical ranges:**
- Urban/Suburban: 1-5 miles (1.6-8 km)
- Rural/Open: 5-15 miles (8-24 km)
- Hilltop to hilltop: 15-50+ miles (24-80+ km)

## When to Consider Switching

You might want to switch away from LongFast if:

- **Your network has grown** - More than 60 active nodes in your area
- **High message volume** - Network feels slow or congested
- **Nodes are close together** - Most nodes within a few miles of each other
- **Speed matters more** - You need faster message delivery

Consider trying [MediumFast](mediumfast.md) for better balance in denser networks.

## Troubleshooting

### Not Seeing Other Nodes

- Verify you're using **LONG_FAST** preset
- Check your **frequency slot** matches local mesh (often slot 20 = 906.875 MHz)
- Confirm **Region** is set correctly (US for United States)
- Make sure others nearby are also using LongFast

### Messages Taking Too Long

- This is normal for LongFast - messages take 2-4 seconds to transmit
- Consider [MediumFast](mediumfast.md) if speed is critical and nodes are close
- Reduce hop limit to minimize retransmissions

### Poor Range

- Improve antenna placement (higher is better)
- Upgrade to a better antenna
- Check that your radio has adequate power
- Verify no obstructions blocking line of sight

## Next Steps

- **Join the network** - Connect with your local Meshtastic community
- **Optimize placement** - Get your antenna up high for best range
- **Explore other presets** - Try [MediumFast](mediumfast.md) for comparison
- **Join Discord** - Get help and share your experiences on our [Discord](../discord.md)

## Learn More

Want to dive deeper into Meshtastic configuration? Check out these resources:

- [Meshtastic Radio Settings](https://meshtastic.org/docs/overview/radio-settings/){target="_blank"}
- [Why Your Mesh Should Switch from LongFast](https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/){target="_blank"}
- [PugetMesh Configuration Guide](https://pugetmesh.org/meshtastic/config/){target="_blank"}

---

*Sources: Configuration recommendations based on [PugetMesh standards](https://github.com/pugetmesh/pugetmesh.github.io/blob/main/docs/meshtastic/config.md){target="_blank"} and [Meshtastic documentation](https://meshtastic.org/docs/overview/radio-settings/){target="_blank"}.*
