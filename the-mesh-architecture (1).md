# The Mesh — Architecture Constitution

This document is now a **constitution**, not an evolving speculative
document. Its purpose is to reject wrong decisions, not to generate new
ones. The ontology is considered mature. Further philosophical exploration
of the foundations below should stop unless something genuinely breaks
coherence.

**Working mode going forward**: the question is no longer "what else could
this become?" It is "how does this coding decision enact or violate the
constitution already established?" No further open-ended ontology sessions
unless something is actually broken — but implementation does not become
detached technical execution either. Code is part of the philosophy, not
separate from it.

## Implementation workflow

Every feature/build step follows this structure:

1. **Proposed implementation** — what's being built, stated plainly (e.g.
   "Add Leaflet geographic data layer for Shannon river systems").
2. **Technical explanation** — what code is added and how it functions.
3. **Constitutional reflection** — a short reflection on what assumptions
   this implementation enacts and how it relates to the principles below.
4. **Constraint check** — explicit: does this violate any fixed principle?
   Either "no violation detected, because..." or "potential tension:
   ...". If a real violation is found, the implementation is revised or
   rejected, not pushed through.

This is not a re-opening of ontology — it's accountability of *this specific
decision* against the *already-settled* constitution.

---

## Language

"Contribution" keeps reintroducing conventional platform logic (USER CREATES
CONTENT → SYSTEM STORES OBJECT). Phase out this word, including in variable
names and data structures. Prefer: **trace, signal, intensification,
activation, encounter, resonance, inscription**. Language shapes
architecture — naming things "submissions" or "uploads" silently
reintroduces the logic this project rejects, even if the underlying code is
otherwise correct.

---

## Fixed principles (stable — do not casually revisit)

- The map is never empty. The mesh already exists prior to user interaction.
- Humans do not create the mesh. Participation alters the visibility or
  intensity of relations already present — never adds to an empty system.
- The interface must avoid conventional platform logic: no profiles, no
  dashboards, no "uploads," no rigid categories, no extraction-feeling data
  collection.
- The four verbs (Hear, Tell, Walk, Tend) describe relational modes, not
  discrete categories. A trace may resonate with multiple verbs at varying
  intensities.
- Identity emerges through traces, not explicit user profiles. No accounts,
  logins, usernames, avatars, follower systems.
- **Layer 1 (see below) remains intentionally unresolved.** No animation, no
  ambient "alive effect," no decorative representation of hidden activity.
  The absence of intervention is the current design, not a gap.

---

## Operational phases (for daily implementation)

Internally, think in these phases rather than Layer 1/2/3 — the layer
concepts remain valid in the architecture, but day-to-day building should
use this simpler framing:

- **Phase A — Interface behaviour**: button foregrounding logic, interaction
  states. Mostly done / in progress on the existing four nodes.
- **Phase B — Relational geography**: real Shannon geographic data
  (river, estuary, green corridors, roads, airport, housing estates, paths)
  reinterpreted relationally rather than cartographically. **This is now the
  conceptual core of the project** — the hardest and most important
  remaining problem. Not "place a marker on a river," but "render the river
  as ecological circulation, roads as accumulated movement memory," etc.
- **Phase C — Trace intensification**: existing relations (from Phase B)
  becoming locally intensified through participation. Depends on Phase B
  existing first.

---

## Layer 1 — currently: no intervention (open question, not blocking)

Extensive exploration (global breathing animation, asynchronous local
micro-drift, palimpsest/double-exposure rendering, "no visible intervention
at all") did not converge on a solution — and convergence was not the goal.
The animation-based directions were rejected because they all assumed "alive
must be signalled," which may itself be the wrong framing.

**Current decision**: build proceeds with **no Layer 1 intervention**. The
map itself is enough for now. This question may return later, but
implementation must not wait on it, and must not casually re-introduce
ambient animation as a stopgap "vitality" signal — that would re-litigate a
question that was deliberately left open, not abandoned.

---

## The mesh is never empty (foundational principle)

The mesh does not begin when the application loads, when a participant
first interacts, or when traces are made. There is no empty state.

At every moment, the territory already consists of countless ongoing
relations unfolding across time — ecological, historical, social,
industrial, architectural, atmospheric, more-than-human. The river is
already moving. Trees are already exchanging signals. Roads already carry
histories of movement. Housing estates carry decades of social memory.
Shannon Airport carries histories of migration, labour, technology,
aspiration, transformation. Folklore, memory, biodiversity, infrastructure,
weather, and community life are not separate layers placed onto a neutral
map — they already constitute the territory together.

The application does not create the mesh or populate an empty system. It
**reveals and shifts attention within an already active field of
relations**. Participation does not add life to the map — it alters the
visibility, density, orientation, and future trajectory of relations already
unfolding. The field is already alive before interface, before
participation, before observation.

**Implication for the build**: there is no "0 traces = empty map" state to
design for. Before any discrete traces exist, the map should already feel
like part of a living field — an ambient baseline (subtle pulse, connective
texture reflecting waterways, green spaces, place-history) present from
first load. Discrete traces, when they exist, sit within and modulate this
baseline — they don't constitute the field from scratch. (Note: Layer 1 is
currently "no intervention" — see above — so this ambient baseline is not
presently being built; the principle still governs how traces relate to the
field once Phase B/C exist.)

**Growth is never "filling the map."** Growth means intensification,
thickening, redirection, and reconfiguration of relations that were already
present.

---

## Core stance

The map is not a background. The interface is not a control surface. The
mesh is always whole — every relation, every trace, is always present.
Interaction does not turn things on or off, filter, or categorize. It shifts
**emphasis** — which relational patterns become more perceptible in this
moment, without anything else disappearing.

Recurring tension to watch for: code-thinking defaults to *app architecture*
("users contribute content, system responds"). The project's ontology is
*field ontology* ("place reorganizes through relation"). Every interaction
decision should be checked against this — does it feel like operating a
tool, or like attention moving within something already alive?

---

## The four verbs: Hear, Tell, Walk, Tend

These are **relational modes**, not categories or filters.

- **Hear** — attunement. Receiving signals already moving through place
  (ambient sound, birdsong, ecological change, atmosphere).
- **Tell** — narrative transmission. Folklore, memory, oral history,
  testimony. Icon: spiral (Shell, from Lucide).
- **Walk** — embodied movement through territory. Routes, pathways,
  physical encounter.
- **Tend** — reciprocal care. Biodiversity observation, planting, habitat
  restoration, ecological stewardship.

### Foregrounding, not filtering

Activating a verb **foregrounds** one mode of relation already present in
the mesh. It does not hide or filter anything.

- Multiple verbs may be foregrounded simultaneously.
- When a mode is foregrounded, traces strongly associated with it become
  more prominent (brighter, larger, more visibly connected). Traces weakly
  or not associated stay at baseline — they recede *in relative emphasis*,
  never to invisibility.
- "All four foregrounded" and "none foregrounded" both represent the mesh
  as undivided whole — visually similar/identical states.
- The four central nodes themselves should reflect this gently: an active
  node steps slightly forward (subtle scale-up / brightness increase, e.g.
  `scale(1.08)`, `brightness(1.15)`), rather than inactive nodes dropping to
  near-zero opacity. The difference is emphasis, not on/off.

### Open question — hidden interface hierarchy

A subtle, unresolved tension: the interface philosophy emphasizes
distributed, non-hierarchical participation, yet the four luminous nodes
still occupy the center of the screen as a stable command structure — which
risks quietly reintroducing centrality. Not to be solved immediately, but
future implementation should stay aware of it.

Possible future direction: the four nodes could **drift slowly over time**
(imperceptibly, geologically slow) rather than remaining permanently fixed,
like floating attractors rather than UI furniture. **Do not build this yet.**
Simply avoid hardcoding positions in ways that would make later drift
difficult to introduce.

---

## Traces

A trace is not filed under a single verb. It carries **overlapping,
weighted relational associations** across all four modes.

```js
{
  id: 'trace-1',
  lat: 52.711,
  lng: -8.877,
  relations: {
    hear: 0.7,
    tell: 0.3,
    walk: 0,
    tend: 0.4
  },
  content: {
    text: '...',   // optional
    audio: '...',  // optional, URL
    image: '...'   // optional, URL
  },
  timestamp: '...' // optional for now
}
```

Example: a folklore trace might resonate with both Tell and Walk. A
biodiversity observation might resonate with both Hear and Tend. When a
mode is foregrounded, a trace's prominence scales with its weight for that
mode.

Per Phase B/C: a trace is better understood as a record of which existing
Layer 2 relation(s) it intensifies, and by how much — not a new object
placed onto the map. The `lat`/`lng` here will likely need to resolve to "a
point along/near an existing relational structure" once Phase B exists,
rather than an arbitrary coordinate.

### Revealing content

Clicking/encountering a trace reveals its content (text / audio / image, in
any combination) via something **anchored to its position on the map** — not
a modal or popup. The trace "speaks" rather than a UI element "opening."

Open question: can multiple traces be revealed at once? Leaning toward yes
(multiple traces visible simultaneously fits "distributed,
non-hierarchical"), but not yet decided.

---

## Map and network as one system (Layer 2 & 3)

The map is part of the living network, not a layer beneath it.

**Layer 2 — pre-existing relational texture.** Real geographic data for
Shannon — river systems, estuary, green corridors, roads, the airport,
housing estates, walking routes, infrastructural pathways — reinterpreted as
existing relations, not conventional map features:

- river = ecological circulation
- roads = accumulated movement memory
- airport = migration field
- housing estates = social density accumulated through time

Not abstract or hand-placed illustrative lines — real geographic data,
gradually shifted in rendering from cartography toward relational topology.

**Layer 3 — local relations becoming intensified.** Not "participants create
nodes." A person recording birdsong near the river does not create a new
object on the map — the local ecological/acoustic relation already present
becomes temporarily **intensified**. Participation thickens, redirects, or
amplifies relations already present; it does not add discrete objects to a
system.

This reframes the data shape in the Traces section above: a trace is better
understood as a record of *which existing relation(s)* it intensifies, and
by how much, rather than a new entity placed onto the map. Visual
inspiration for how intensification might render: mycelial networks, river
tributaries, neural pathways, root systems — connection and density growing
within existing structure, not new pins appearing.

---

## Identity and continuity

**No accounts, logins, profiles, usernames, avatars, or follower systems.**

### Where memory lives

Continuity is **spatial and relational before individual**. Repeated
encounters around, say, a river pathway gradually increase that zone's
network complexity/density — more connections, brighter clusters. The
*ecology* remembers participation. The *platform* does not need to remember
the *person*.

This significantly de-emphasizes (possibly eliminates the need for) tracking
returning visitors. The system should not be oriented toward recognizing "a
returning user" — it should be oriented toward recognizing "a recurring
pattern of presence in this place," which is a property of the data/location,
not of a tracked identity.

### Remaining role for a local token

A lightweight, invisible local token (e.g. `crypto.randomUUID()` in
`localStorage`) may still be useful for minor UX conveniences — primarily,
gating whether **orientation hints** (see below) have been seen before on
this device. This is incidental, not part of the ecological model, and
should not be over-engineered or treated as "identity infrastructure."

Known limitation, accepted rather than solved: this is per-device. A person
on a different device, or after clearing browser data, has no continuity to
prior visits. Given the no-accounts constraint, this is treated as
philosophically consistent (forest/pathway analogy — presence is local and
embodied, not portable) rather than a bug to fix. A possible future, fully
optional refinement: a personal recovery phrase a person can choose to save,
with no signup/email involved. Not needed now.

---

## Orientation hints

Brief, ambient phrases may appear when a verb is first activated, to orient
without becoming persistent UI chrome (no tooltips, no help icons).

Draft phrasing:
- **Hear** — "attunement — listen to what's already here"
- **Tell** — "memory, folklore, stories of place"
- **Walk** — "movement through territory"
- **Tend** — "care, growth, ecological participation"

Mechanism: fade in on first activation (per the local token above), fade out
after a few seconds, don't repeat. Exact placement (near the button vs.
drifting on the map) undecided.

---

## Storage

No backend currently. Cloudflare D1 is the likely choice when real
persistence is needed — generous free tier, should comfortably cover early-
to-mid stage community use. Not needed for placeholder/prototype work.

---

## Build order

1. ~~Layer 1 (ambient field)~~ — resolved as "no intervention." Nothing to
   build here for now.
2. **Phase A — foregrounding behaviour** on the four central buttons —
   replace the earlier recede-to-near-invisible approach with the gentler
   emphasis model (`scale(1.08)`, `brightness(1.15)` on active, inactive
   stay at baseline). Interaction logic, independent of Phase B/C data.
3. **Phase B — relational geography** — bring in real geographic data for
   Shannon (river, estuary, green corridors, roads, airport, housing
   estates, paths) and begin reinterpreting its rendering toward relational
   topology. The conceptual core of the remaining work.
4. **Phase C — trace intensification** — represent traces as
   intensifications of existing Phase B relations (not new objects), with
   weighted multi-relation association across the four verbs.
5. Reveal trace content (text / audio / image), anchored to the intensified
   relation's position.
6. Local token groundwork (invisible, minor) + orientation hints.
7. Real persistence (Cloudflare D1).

---

## Technical stack (current)

- React + Vite
- Leaflet (Carto Dark Matter-style tiles)
- Custom CSS (glow/glass effects on the four central nodes — built and
  working)
- Cloudflare deployment (via GitHub push → auto-deploy)
- Icons: Lucide React (`Ear`, `Footprints`, `Sprout`, `Shell`)
- Layer 2 will likely need geographic data for Shannon (e.g. OpenStreetMap
  data for rivers, green spaces, roads, paths) — source/format not yet
  determined
