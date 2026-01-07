# MediumFast Configuration

Welcome to the MediumFast preset guide! This configuration offers the **best balance** between range and speed, making it ideal for most mesh networks. If your network is growing or you need faster messaging while maintaining good range, MediumFast is for you.

!!! info "What is MediumFast?"
    MediumFast is a balanced Meshtastic modem preset that provides **3-4 times faster data rates** than LongFast while still maintaining respectable range. It's the sweet spot for most deployments, especially in urban and suburban areas.

## What You'll Need

- A Meshtastic-compatible LoRa radio (already flashed with Meshtastic firmware)
- The Meshtastic app on your phone or computer
- About 10 minutes to configure

## Quick Overview

### Technical Specifications

| Setting | Value |
|---------|-------|
| **Modem Preset** | MEDIUM_FAST |
| **Bandwidth** | 250 kHz |
| **Spreading Factor** | 9 |
| **Coding Rate** | 4/5 |
| **Data Rate** | ~3.5 kbps |
| **Link Budget** | ~148 dB |

### Performance Characteristics

- **Range**: Good (3-8 miles / 5-13 km in typical conditions)
- **Message Speed**: Fast (~500ms-1 second per transmission)
- **Airtime**: Moderate (3.5x faster than LongFast)
- **Best For**: Urban/suburban areas, growing networks, balanced performance

!!! success "Recommended for Most Users"
    MediumFast is becoming the preferred choice for many mesh communities because it handles network growth better while still providing excellent range.

## When to Use MediumFast

Choose MediumFast when:

- **Your network is growing** - You have or expect more than 60 active nodes
- **Balanced performance needed** - You want both good range and speed
- **Urban/Suburban deployment** - Nodes are within a few miles of each other
- **Network congestion** - LongFast feels slow or messages are delayed
- **Higher message volume** - Your community sends lots of messages

## Why MediumFast is Better for Larger Networks

### The Problem with LongFast

As networks grow, LongFast can create bottlenecks:

- **Longer airtime** = Each message blocks the channel 3.5x longer
- **More collisions** = Messages interfere with each other more often
- **Slower throughput** = The whole network feels sluggish

### How MediumFast Helps

- **Faster transmissions** = Messages complete 3.5x quicker
- **More capacity** = Channel handles 3-4x more messages
- **Less congestion** = Fewer message collisions and retries
- **Still good range** = Only 5 dB less link budget than LongFast

!!! tip "Network Performance"
    Networks with 60+ nodes should strongly consider switching to MediumFast. The speed improvement dramatically reduces congestion while maintaining usable range for most deployments.

## Configuring MediumFast

### Using the Meshtastic App

=== "Step 1: Open Settings"
    1. Connect to your Meshtastic device
    2. Tap the **Settings** icon
    3. Select **Radio Configuration** (or **LoRa**)

=== "Step 2: Select Preset"
    1. Find **Modem Preset** in the radio settings
    2. Select **MEDIUM_FAST** from the dropdown
    3. The app will automatically set:
        - Bandwidth: 250 kHz
        - Spreading Factor: 9
        - Coding Rate: 4/5

=== "Step 3: Set Frequency"
    **For Sagebrush Mesh / Puget Sound Area:**

    MediumFast uses a different frequency slot than LongFast:

    - **Frequency Slot**: 45
    - **Actual Frequency**: 913.125 MHz

    !!! warning "Different Frequency!"
        MediumFast typically uses a **different frequency slot** than LongFast. This prevents interference between the two networks. Always verify your local mesh's frequency standardization.

=== "Step 4: Save & Restart"
    1. Tap **Save** or **Apply**
    2. Your device will restart with the new settings
    3. Wait about 30 seconds for the reboot to complete

!!! info "Coordinating Network Migration"
    If your community is switching from LongFast to MediumFast, coordinate the change so everyone switches together. Devices on different presets or frequencies cannot communicate with each other.

## Advanced Configuration

### Recommended Node Settings

For optimal performance on the Sagebrush Mesh network using MediumFast:

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

!!! tip "Hop Limit Best Practices"
    With MediumFast's slightly reduced range, a **Hop Limit of 3** is still appropriate for most deployments. Each hop extends your reach while the faster transmission speed means less congestion even with multiple hops.

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
    Keep **MQTT Downlink** set to **FALSE** to prevent flooding the mesh with messages from the internet. This is even more important on MediumFast networks handling higher message volumes.

## Understanding MediumFast Performance

### Speed vs Range Trade-off

MediumFast achieves faster speeds by using:

- **Lower Spreading Factor (9 vs 11)**: Less time spreading data = faster transmission
- **Efficient Coding Rate (4/5)**: Good balance of error correction without excessive overhead
- **Same Bandwidth (250 kHz)**: Maintains signal width for stability

**The result:**
- 5 dB less link budget compared to LongFast
- 3.5x faster data rate (3.52 kbps vs 1 kbps)
- Significantly reduced airtime per message

### Range Expectations

Real-world range with MediumFast:

**Typical ranges:**
- Urban/Suburban: 1-3 miles (1.6-5 km)
- Rural/Open: 3-8 miles (5-13 km)
- Hilltop to hilltop: 8-30+ miles (13-48+ km)

**Factors affecting range:**
- **Antenna Quality**: High-quality antennas help compensate for lower SF
- **Elevation**: Getting antennas high remains critical
- **Terrain**: Line-of-sight paths perform best
- **Interference**: Urban RF noise can reduce effective range

!!! success "Real-World Performance"
    In practice, MediumFast still provides excellent range for most deployments. The 5 dB difference is often barely noticeable, especially with good antenna placement.

## Comparison: LongFast vs MediumFast

| Feature | LongFast | MediumFast |
|---------|----------|------------|
| **Spreading Factor** | 11 | 9 |
| **Data Rate** | ~1 kbps | ~3.5 kbps |
| **Link Budget** | ~153 dB | ~148 dB |
| **Message Time** | 2-4 seconds | 0.5-1 second |
| **Max Range** | Excellent | Good |
| **Network Capacity** | Lower | Higher (3-4x) |
| **Best Network Size** | <60 nodes | 60+ nodes |
| **Urban Performance** | Slow | Excellent |
| **Rural Performance** | Excellent | Good |

!!! info "The Sweet Spot"
    MediumFast is increasingly recognized as the better default for most mesh networks. Unless you specifically need maximum range over sparse rural areas, MediumFast will provide a better experience.

## Network Migration Strategy

If your community is considering switching from LongFast to MediumFast:

### Planning Phase

1. **Discuss with community** - Build consensus around the switch
2. **Pick a date** - Choose a specific day/time for the migration
3. **Notify all users** - Ensure everyone knows about the change
4. **Prepare guides** - Share configuration instructions

### Migration Day

1. **Core nodes first** - Have key infrastructure nodes switch at the scheduled time
2. **User nodes follow** - Users switch their devices within a window
3. **Monitor the network** - Watch for issues during transition
4. **Support users** - Help stragglers complete the switch

!!! tip "Dual Network Period"
    Some communities run LongFast and MediumFast networks simultaneously on different frequency slots during migration, allowing users to switch at their convenience.

## Troubleshooting

### Not Seeing Other Nodes

- Verify you're using **MEDIUM_FAST** preset
- Check your **frequency slot** matches local mesh (often slot 45 = 913.125 MHz)
- Confirm **Region** is set correctly (US for United States)
- Make sure others nearby have also switched to MediumFast

### Range Seems Shorter

- This is expected - MediumFast trades some range for speed
- Improve antenna placement to compensate
- Consider upgrading to a better antenna
- Check that you have good line-of-sight to other nodes
- For very long distances, some nodes might need to remain on LongFast

### Messages Still Slow

- Verify the preset actually switched (check Spreading Factor = 9)
- Check network congestion - may need more infrastructure nodes
- Ensure hop limit isn't too high (keep at 3)
- Monitor for nodes still on LongFast interfering

## Next Steps

- **Optimize placement** - Good antenna placement matters even more on MediumFast
- **Monitor performance** - Compare message delivery times vs LongFast
- **Support the network** - Consider setting up a fixed node to help coverage
- **Join Discord** - Share your experience on our [Discord](../discord.md)

## Learn More

Want to understand more about preset selection? Check out these resources:

- [Why Your Mesh Should Switch from LongFast](https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/){target="_blank"}
- [Meshtastic Radio Settings](https://meshtastic.org/docs/overview/radio-settings/){target="_blank"}
- [PugetMesh Configuration Guide](https://pugetmesh.org/meshtastic/config/){target="_blank"}
- [LongFast Configuration](longfast.md) - Compare with the default preset

---

*Sources: Configuration recommendations based on [PugetMesh standards](https://github.com/pugetmesh/pugetmesh.github.io/blob/main/docs/meshtastic/config.md){target="_blank"}, [Meshtastic documentation](https://meshtastic.org/docs/overview/radio-settings/){target="_blank"}, and [Meshtastic blog articles](https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/){target="_blank"}.*
