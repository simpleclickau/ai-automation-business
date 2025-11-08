# LiveKit Telephony Integration - Complete Technical Analysis

**Research Date:** November 2024  
**Focus:** How LiveKit connects to telephony providers for AI voice agents  
**Use Case:** Understanding Inspra.ai's technology stack and Australian telephony options

---

## Executive Summary

LiveKit uses **SIP (Session Initiation Protocol)** trunking to bridge AI voice agents with traditional telephone systems (PSTN). Companies like Inspra.ai use LiveKit as the real-time communication layer, connecting it to SIP trunking providers like **Telnyx**, **Twilio**, **Plivo**, or **Wavix** to enable phone calls.

For Australian companies, the most likely telephony providers are:
1. **Telnyx** (global, Australian numbers, LiveKit-verified)
2. **Twilio** (global, Australian presence, LiveKit-verified)
3. **VoIPline** (Australian specialist)
4. **Aatrox** (Australian specialist)
5. **Crazytel** (Australian specialist)

---

## How LiveKit Telephony Works

### Architecture Overview

```
[Phone Call] → [PSTN] → [SIP Trunk Provider] → [LiveKit SIP] → [LiveKit Room] → [AI Agent]
```

**Detailed Flow:**

1. **Inbound Call:**
   - Caller dials phone number (e.g., +61 2 1234 5678)
   - Call routes through PSTN to SIP trunk provider (e.g., Telnyx)
   - SIP provider sends SIP INVITE to LiveKit SIP endpoint
   - LiveKit SIP creates a SIP participant in a LiveKit room
   - AI agent (running LiveKit Agents framework) joins the room
   - Audio streams between caller and AI agent via RTP/SRTP

2. **Outbound Call:**
   - AI agent triggers outbound call via LiveKit API
   - LiveKit SIP sends SIP INVITE to SIP trunk provider
   - SIP provider routes call through PSTN to recipient
   - Recipient answers, audio streams established
   - AI agent converses with recipient in real-time

### Key Components

#### 1. LiveKit SIP Service
- **Purpose:** Bridge between SIP telephony and LiveKit rooms
- **Functions:**
  - Receives SIP INVITE requests from trunk providers
  - Creates SIP participants in LiveKit rooms
  - Manages SIP authentication and routing
  - Handles DTMF (dial tones), call transfers, custom headers
- **Protocols:** TCP, UDP, TLS for signaling; RTP, SRTP for media
- **Part of:** LiveKit Cloud (managed) or self-hosted

#### 2. SIP Trunks
- **Inbound Trunk:** Handles incoming calls to your phone numbers
- **Outbound Trunk:** Handles outgoing calls from AI agents
- **Configuration:** Created via LiveKit API/CLI
- **Features:**
  - Region pinning (for compliance)
  - IP/number restrictions
  - Noise cancellation (Krisp AI)
  - HD voice (G.722 codec)
  - Secure trunking (TLS + SRTP)

#### 3. Dispatch Rules
- **Purpose:** Control how inbound calls are routed to LiveKit rooms
- **Capabilities:**
  - Route all callers to same room or different rooms
  - Add custom participant attributes
  - PIN-based routing
  - Multiple rules per trunk

#### 4. SIP Participants
- **Definition:** Each caller, callee, and AI agent is a LiveKit participant
- **Management:** Standard LiveKit participant APIs
- **Attributes:** Standard + SIP-specific (caller ID, headers, etc.)
- **Creation:**
  - Inbound: Automatic for each caller
  - Outbound: Manual via `CreateSIPParticipant` API

---

## LiveKit-Verified SIP Trunk Providers

### Global Providers (Australian Numbers Available)

#### 1. Telnyx
**Website:** https://telnyx.com/  
**Status:** LiveKit-verified, official integration guide  
**Australian Presence:** Yes, Australian phone numbers available

**Features:**
- Pay-as-you-go and monthly plans
- Australian local, national, and mobile numbers
- Global coverage (60+ countries)
- Advanced features: IVR, TTS, STT, call recording
- Voice API integration (Conversational AI support)
- SIP trunking with LiveKit (official guide)

**Pricing (Approximate):**
- Australian inbound: ~$0.01-0.02 USD/minute
- Australian outbound: ~$0.02-0.05 USD/minute
- Number rental: ~$1-2 USD/month

**LiveKit Integration:**
- Official configuration guide: https://developers.telnyx.com/docs/voice/sip-trunking/livekit-configuration-guide
- Supports inbound and outbound trunks
- Can route calls to Telnyx Voice API for advanced features (IVR, recording, transcription)
- Credentials-based authentication
- FQDN connection type

**Likely Choice for Inspra.ai:** HIGH (global leader, LiveKit-verified, Australian numbers)

---

#### 2. Twilio
**Website:** https://www.twilio.com/  
**Status:** LiveKit-verified, official documentation  
**Australian Presence:** Yes, Australian phone numbers and data centers

**Features:**
- Australian local, national, toll-free numbers
- Global coverage (100+ countries)
- Programmable Voice API
- Advanced features: IVR, TTS, STT, call recording, Flex contact center
- Elastic SIP Trunking
- LiveKit integration (official docs)

**Pricing (Australia):**
- Inbound: ~$0.0085 USD/minute
- Outbound: ~$0.0200 USD/minute (local), ~$0.0400 USD/minute (mobile)
- Number rental: ~$1.00 USD/month (local), ~$2.00 USD/month (toll-free)
- Call paths: $0.05 USD per concurrent call path

**LiveKit Integration:**
- Official documentation: https://docs.livekit.io/sip/accepting-calls-twilio-voice/
- Supports inbound calls via Twilio Voice
- Can use TwiML for advanced call routing
- Does NOT support HD voice (G.722)

**Likely Choice for Inspra.ai:** MEDIUM-HIGH (well-known, but more expensive than Telnyx)

---

#### 3. Plivo
**Website:** https://www.plivo.com/  
**Status:** LiveKit-verified  
**Australian Presence:** Yes, Australian phone numbers

**Features:**
- Australian local and mobile numbers
- Global coverage (190+ countries)
- Voice API
- SMS capabilities
- SIP trunking

**Pricing (Australia):**
- Inbound: ~$0.0070 USD/minute
- Outbound: ~$0.0200 USD/minute (local), ~$0.0400 USD/minute (mobile)
- Number rental: ~$1.00 USD/month

**LiveKit Integration:**
- Listed as verified provider in LiveKit docs
- Standard SIP trunk configuration

**Likely Choice for Inspra.ai:** MEDIUM (competitive pricing, less well-known than Twilio/Telnyx)

---

#### 4. Wavix
**Website:** https://wavix.com/  
**Status:** LiveKit-verified, official partnership  
**Australian Presence:** Yes, Australian numbers available

**Features:**
- Direct LiveKit integration (official partnership)
- Australian phone numbers
- Global coverage
- Voice API
- Real-time communications focus

**Pricing:** Not publicly disclosed (contact for quote)

**LiveKit Integration:**
- Official partnership: https://wavix.com/blog/livekit-and-wavix-bringing-real-phone-calls-into-your-apps
- Direct integration with LiveKit
- Inbound and outbound calls

**Likely Choice for Inspra.ai:** MEDIUM (newer partnership, less established than Twilio/Telnyx)

---

### Australian Specialist Providers

#### 5. VoIPline
**Website:** https://www.voipline.net.au/  
**Status:** Australia's #1 business VoIP provider (self-proclaimed)  
**Australian Focus:** 100% Australian company

**Features:**
- Australian local, 1300, 1800, virtual mobile numbers
- SIP trunking
- Hosted PBX
- 30-day free trial
- Low rates, reliable connectivity
- Advanced functionality

**Pricing:**
- SIP trunking from $0/month (pay-as-you-go)
- Competitive per-minute rates
- Number rental varies by type

**LiveKit Integration:**
- Not officially verified by LiveKit
- Standard SIP trunk should work (requires manual configuration)

**Likely Choice for Inspra.ai:** MEDIUM (Australian specialist, but requires manual LiveKit setup)

---

#### 6. Aatrox Communications
**Website:** https://www.aatrox.com.au/  
**Status:** Australian SIP trunk provider  
**Australian Focus:** Yes, Australian company

**Features:**
- Australian phone numbers
- SIP trunking
- Certified by Yeastar and 3CX
- Business VoIP focus

**Pricing:** Contact for quote

**LiveKit Integration:**
- Not officially verified by LiveKit
- Standard SIP trunk should work (requires manual configuration)

**Likely Choice for Inspra.ai:** LOW-MEDIUM (smaller provider, manual setup required)

---

#### 7. Crazytel
**Website:** https://crazytel.com.au/  
**Status:** Australian VoIP provider  
**Australian Focus:** Yes, Australian company

**Features:**
- SIP trunking from $0/month
- Australian phone numbers
- Instant setup
- Enterprise-grade VoIP network
- Connect on-premise PBX

**Pricing:**
- SIP trunking from $0/month (usage-based)
- Competitive rates

**LiveKit Integration:**
- Not officially verified by LiveKit
- Standard SIP trunk should work (requires manual configuration)

**Likely Choice for Inspra.ai:** LOW-MEDIUM (smaller provider, manual setup required)

---

#### 8. 2talk
**Website:** https://www.2talk.co.nz/ (New Zealand-based, serves Australia)  
**Status:** Trans-Tasman VoIP provider  
**Australian Presence:** Yes, Australian numbers

**Features:**
- Australian and New Zealand phone numbers
- SIP trunking
- Certified by Yeastar
- Business VoIP

**Pricing:** Contact for quote

**LiveKit Integration:**
- Not officially verified by LiveKit
- Standard SIP trunk should work (requires manual configuration)

**Likely Choice for Inspra.ai:** LOW (NZ-based, smaller market presence in Australia)

---

## Most Likely Provider for Inspra.ai

### Analysis

**Top 3 Most Likely:**

1. **Telnyx (HIGHEST PROBABILITY)**
   - ✅ Official LiveKit integration guide
   - ✅ Global leader with Australian presence
   - ✅ Competitive pricing
   - ✅ Advanced features (Voice API, IVR, TTS, STT)
   - ✅ Can route calls to Voice API for complex workflows
   - ✅ Well-documented, easy setup
   - ✅ Supports both inbound and outbound
   - ✅ Credentials-based auth (secure)

2. **Twilio (HIGH PROBABILITY)**
   - ✅ Official LiveKit documentation
   - ✅ Well-known, trusted brand
   - ✅ Australian data centers and numbers
   - ✅ Programmable Voice API
   - ✅ Advanced features (TwiML, Flex)
   - ⚠️ More expensive than Telnyx
   - ❌ No HD voice support

3. **VoIPline (MEDIUM PROBABILITY)**
   - ✅ Australian specialist (#1 in Australia)
   - ✅ Competitive pricing
   - ✅ 30-day free trial
   - ✅ Local support
   - ⚠️ Not officially verified by LiveKit
   - ⚠️ Requires manual configuration
   - ⚠️ May lack advanced API features

### Verdict

**Inspra.ai most likely uses Telnyx** because:
- Official LiveKit integration guide (easiest setup)
- Competitive pricing (important for scalability)
- Advanced Voice API features (IVR, TTS, STT, Conversational AI)
- Can route calls to Telnyx Voice API for complex workflows (matches Inspra's feature set)
- Global reach with Australian numbers
- Well-documented, developer-friendly

**Alternative:** Twilio (if Inspra prioritizes brand recognition and enterprise features over cost)

---

## Complete Call Flow: Inspra.ai Architecture

### Inbound Call Flow (Customer calls Inspra AI agent)

```
1. Customer dials +61 2 XXXX XXXX (Inspra's Australian number)
   ↓
2. PSTN routes call to Telnyx (SIP trunk provider)
   ↓
3. Telnyx sends SIP INVITE to LiveKit SIP endpoint
   ↓
4. LiveKit SIP creates SIP participant in LiveKit room
   ↓
5. Inspra's AI agent (LiveKit Agents framework) joins room
   ↓
6. Audio streams established (RTP/SRTP)
   ↓
7. AI agent processes audio:
   - STT: AssemblyAI or Deepgram converts speech to text
   - LLM: GPT-4o or similar processes text, generates response
   - TTS: ElevenLabs or similar converts response to speech
   ↓
8. Response audio streamed back to customer via LiveKit → Telnyx → PSTN
   ↓
9. Call continues until customer or agent hangs up
   ↓
10. Call data (transcript, recording, metadata) saved to Inspra's database
```

### Outbound Call Flow (Inspra AI agent calls customer)

```
1. Inspra triggers outbound call via LiveKit API
   - CreateSIPParticipant with customer's phone number
   ↓
2. LiveKit SIP sends SIP INVITE to Telnyx
   ↓
3. Telnyx routes call through PSTN to customer's phone
   ↓
4. Customer answers
   ↓
5. Audio streams established (RTP/SRTP)
   ↓
6. AI agent converses with customer (same STT → LLM → TTS flow)
   ↓
7. Call continues until completion
   ↓
8. Call data saved to Inspra's database
```

---

## Technology Stack: Inspra.ai (Inferred)

### Confirmed Components

1. **Real-time Communication:** LiveKit (confirmed via browser inspection)
2. **Telephony Provider:** Telnyx (most likely) or Twilio
3. **AI Agent Framework:** LiveKit Agents

### Likely Components (Based on Market Standards)

4. **Speech-to-Text (STT):**
   - AssemblyAI (Australian accent support, high accuracy)
   - OR Deepgram (low latency, competitive pricing)

5. **Large Language Model (LLM):**
   - GPT-4o or GPT-4o mini (OpenAI)
   - OR Gemini 2.0 Flash (Google)
   - OR Claude 3.5 Sonnet (Anthropic)

6. **Text-to-Speech (TTS):**
   - ElevenLabs (premium quality, Australian voices)
   - OR Play.ht (natural voices)
   - OR Cartesia (low latency)

7. **Database:**
   - PostgreSQL (call records, transcripts, customer data)
   - OR MongoDB (flexible schema for call metadata)

8. **Backend:**
   - Node.js or Python (LiveKit SDKs available)
   - Express or FastAPI framework

9. **Frontend:**
   - React or Next.js (web dashboard)
   - LiveKit React components

10. **Hosting:**
    - AWS or Google Cloud (Australian regions for data sovereignty)
    - LiveKit Cloud (managed LiveKit infrastructure)

---

## Cost Analysis: Telephony for Australian AI Voice Agent

### Scenario: 10,000 minutes/month (167 hours)

#### Option 1: Telnyx (Most Likely)

| Component | Cost (USD) | Cost (AUD) |
|-----------|-----------|-----------|
| Australian number rental | $2.00/month | $3.00/month |
| Inbound calls (5,000 min) | $50-100 | $75-150 |
| Outbound calls (5,000 min) | $100-250 | $150-375 |
| **Total** | **$152-352/month** | **$228-528/month** |

**Per-minute cost:** $0.023-0.053 AUD/minute

#### Option 2: Twilio

| Component | Cost (USD) | Cost (AUD) |
|-----------|-----------|-----------|
| Australian number rental | $1.00/month | $1.50/month |
| Inbound calls (5,000 min) | $42.50 | $64 |
| Outbound calls (5,000 min) | $100-200 | $150-300 |
| Call paths (assume 10 concurrent) | $0.50 | $0.75 |
| **Total** | **$144-244/month** | **$216-366/month** |

**Per-minute cost:** $0.022-0.037 AUD/minute

#### Option 3: VoIPline (Australian Specialist)

| Component | Cost (AUD) |
|-----------|-----------|
| SIP trunk | $0/month (PAYG) |
| Australian number rental | ~$5/month |
| Inbound calls (5,000 min) | ~$50-100 |
| Outbound calls (5,000 min) | ~$100-200 |
| **Total** | **$155-305/month** |

**Per-minute cost:** $0.016-0.031 AUD/minute

### Verdict

**VoIPline offers the best pricing** for Australian-only calls, but **Telnyx/Twilio offer better developer experience** and LiveKit integration.

For Inspra.ai, the **extra $50-100 AUD/month** for Telnyx is likely worth it for:
- Official LiveKit integration (faster development)
- Advanced Voice API features (IVR, recording, transcription)
- Global scalability (if expanding beyond Australia)
- Better documentation and support

---

## Recommendations for Articulate AI

### Telephony Provider Selection

**Recommended: Telnyx**

**Reasons:**
1. ✅ Official LiveKit integration guide (fastest setup)
2. ✅ Competitive pricing ($0.023-0.053 AUD/minute)
3. ✅ Australian phone numbers available
4. ✅ Advanced Voice API features (IVR, TTS, STT, Conversational AI)
5. ✅ Can route calls to Voice API for complex workflows
6. ✅ Global reach (if expanding beyond Australia)
7. ✅ Well-documented, developer-friendly
8. ✅ Supports both inbound and outbound
9. ✅ HD voice support (G.722)
10. ✅ Secure trunking (TLS + SRTP)

**Alternative: VoIPline (if prioritizing Australian focus and cost)**

**Reasons:**
1. ✅ Australian specialist (#1 in Australia)
2. ✅ Lowest pricing ($0.016-0.031 AUD/minute)
3. ✅ 30-day free trial
4. ✅ Local Australian support
5. ⚠️ Requires manual LiveKit configuration
6. ⚠️ May lack advanced API features
7. ⚠️ Limited global reach

### Implementation Steps

1. **Sign up for Telnyx account**
   - Complete L2 verification
   - Purchase Australian phone number(s)

2. **Configure Telnyx SIP Connection**
   - Create SIP connection with FQDN type
   - Point to LiveKit SIP URI
   - Configure outbound authentication (credentials)
   - Assign phone numbers to SIP connection

3. **Configure LiveKit SIP Trunks**
   - Create inbound trunk (for receiving calls)
   - Create dispatch rule (route calls to rooms)
   - Create outbound trunk (for making calls)
   - Configure authentication (Telnyx credentials)

4. **Build AI Agent**
   - Use LiveKit Agents framework
   - Integrate STT (AssemblyAI)
   - Integrate LLM (GPT-4o mini)
   - Integrate TTS (ElevenLabs)
   - Handle call logic (greeting, conversation, hang-up)

5. **Test**
   - Test inbound calls (call your Australian number)
   - Test outbound calls (agent calls test number)
   - Verify audio quality
   - Check latency and performance

6. **Deploy**
   - Deploy to production (LiveKit Cloud or self-hosted)
   - Monitor call quality and costs
   - Optimize based on usage patterns

### Cost Projections for Articulate AI

**Assumptions:**
- Starter tier: 1,000 minutes/month
- Professional tier: 5,000 minutes/month
- Enterprise tier: 20,000 minutes/month

#### Starter Tier (1,000 min/month)

| Component | Cost (AUD) |
|-----------|-----------|
| Telnyx number rental | $3 |
| Telnyx calls (1,000 min) | $23-53 |
| **Telephony Total** | **$26-56/month** |
| **Markup (2x)** | **$52-112/month** |
| **Included in $199 plan** | ✅ Yes |

**Gross Margin:** 74-84% (after telephony costs)

#### Professional Tier (5,000 min/month)

| Component | Cost (AUD) |
|-----------|-----------|
| Telnyx number rental | $3 |
| Telnyx calls (5,000 min) | $115-265 |
| **Telephony Total** | **$118-268/month** |
| **Markup (2x)** | **$236-536/month** |
| **Charge customer** | **$0.08/min = $400** |

**Gross Margin:** 40-70% (after telephony costs)

#### Enterprise Tier (20,000 min/month)

| Component | Cost (AUD) |
|-----------|-----------|
| Telnyx number rental | $3 |
| Telnyx calls (20,000 min) | $460-1,060 |
| **Telephony Total** | **$463-1,063/month** |
| **Markup (2x)** | **$926-2,126/month** |
| **Charge customer** | **$0.06/min = $1,200** |

**Gross Margin:** 13-61% (after telephony costs)

### Pricing Strategy

**Recommended Pricing (AUD):**

| Tier | Monthly Base | Per-Minute | Included Minutes | Overage Rate |
|------|--------------|------------|------------------|--------------|
| **Starter** | $199 | - | 1,000 | $0.10/min |
| **Professional** | $399 | - | 5,000 | $0.08/min |
| **Enterprise** | Custom | - | Custom | $0.06/min |

**Rationale:**
- Include minutes in base price (simpler for customers)
- Overage rates cover costs + margin
- Competitive with Inspra.ai ($499/month + $0.25/call)
- Higher margins on lower tiers (subsidize customer acquisition)
- Lower margins on higher tiers (retain enterprise customers)

---

## Conclusion

Inspra.ai most likely uses **LiveKit + Telnyx** for their telephony stack, enabling seamless integration between AI voice agents and traditional phone systems. This combination provides:

- **Developer-friendly setup** (official integration guide)
- **Competitive pricing** ($0.023-0.053 AUD/minute)
- **Australian phone numbers** (local presence)
- **Advanced features** (Voice API, IVR, TTS, STT)
- **Global scalability** (if expanding beyond Australia)

For Articulate AI, **Telnyx is the recommended telephony provider** due to its official LiveKit integration, competitive pricing, and advanced features. VoIPline is a viable alternative if prioritizing Australian focus and lowest cost, but requires manual LiveKit configuration.

The complete technology stack for an AI voice agent platform like Inspra.ai includes:
1. **LiveKit** (real-time communication)
2. **Telnyx** (telephony/SIP trunking)
3. **AssemblyAI** (speech-to-text)
4. **GPT-4o mini** (language model)
5. **ElevenLabs** (text-to-speech)
6. **PostgreSQL** (database)
7. **Node.js/Python** (backend)
8. **React** (frontend)
9. **AWS/GCP** (hosting)

This stack enables building a production-ready AI voice agent platform with Australian phone numbers, data sovereignty, and enterprise-grade reliability.

---

## References

1. LiveKit SIP Documentation - https://docs.livekit.io/sip/
2. Telnyx LiveKit Configuration Guide - https://developers.telnyx.com/docs/voice/sip-trunking/livekit-configuration-guide
3. LiveKit Agents Telephony Integration - https://docs.livekit.io/agents/start/telephony/
4. Twilio LiveKit Integration - https://docs.livekit.io/sip/accepting-calls-twilio-voice/
5. VoIPline SIP Trunking - https://www.voipline.net.au/sip-trunking
6. Aatrox Communications - https://www.aatrox.com.au/
7. Crazytel SIP Trunks - https://crazytel.com.au/business/siptrunks/
8. 3CX SIP Trunk Providers Australia - https://www.3cx.com/partners/sip-trunks/australia/

---

**Research Completed:** November 7, 2024  
**Researcher:** Manus AI Agent  
**Document Version:** 1.0

