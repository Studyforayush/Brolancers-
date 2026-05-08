/**
 * CustomCursor Demo Component
 * 
 * This component demonstrates the custom cursor functionality
 * and how it interacts with different interactive elements.
 * 
 * You can use this as reference when implementing the cursor
 * in your components throughout the site.
 */

export function CustomCursorDemo() {
  return (
    <div className="min-h-screen bg-[#12051F] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-[#F6F1E8] mb-4">
            Custom Cursor Demo
          </h1>
          <p className="text-lg text-[#F6F1E8]/70">
            Hover over the interactive elements below to see the custom cursor in action.
          </p>
        </div>

        {/* Section 1: Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6F1E8] mb-8">Links</h2>
          <div className="space-y-4">
            <p className="text-[#F6F1E8]/70">
              Hover over links to see the cursor expand and change color:
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-6 py-3 bg-[#8B5CFF] text-white rounded-lg hover:bg-[#8B5CFF]/90">
                Primary Link
              </a>
              <a href="#" className="px-6 py-3 border border-[#8B5CFF] text-[#F6E84A] rounded-lg hover:bg-[#8B5CFF]/10">
                Secondary Link
              </a>
              <a href="#" className="text-[#F6E84A] underline hover:text-[#F6E84A]/80">
                Text Link
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6F1E8] mb-8">Buttons</h2>
          <div className="space-y-4">
            <p className="text-[#F6F1E8]/70">
              Click buttons to see the cursor respond to mouse events:
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#F6E84A] text-[#12051F] font-semibold rounded-lg hover:bg-[#F6E84A]/90 transition-all">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-[#8B5CFF] text-white font-semibold rounded-lg hover:bg-[#8B5CFF]/90 transition-all">
                Secondary Button
              </button>
              <button className="px-6 py-3 border border-[#F6F1E8] text-[#F6F1E8] rounded-lg hover:bg-[#F6F1E8]/10 transition-all">
                Outline Button
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6F1E8] mb-8">Form Elements</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-[#F6F1E8] mb-2 font-semibold">
                Input Field
              </label>
              <input
                type="text"
                placeholder="Type something..."
                className="w-full px-4 py-2 bg-[#1a0d2e] border border-[#8B5CFF]/50 text-[#F6F1E8] rounded-lg focus:border-[#8B5CFF] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#F6F1E8] mb-2 font-semibold">
                Textarea
              </label>
              <textarea
                placeholder="Write something..."
                className="w-full px-4 py-2 bg-[#1a0d2e] border border-[#8B5CFF]/50 text-[#F6F1E8] rounded-lg focus:border-[#8B5CFF] focus:outline-none"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-[#F6F1E8] mb-2 font-semibold">
                Select Dropdown
              </label>
              <select className="w-full px-4 py-2 bg-[#1a0d2e] border border-[#8B5CFF]/50 text-[#F6F1E8] rounded-lg focus:border-[#8B5CFF] focus:outline-none">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section 4: Custom Hover Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6F1E8] mb-8">Custom Hover Areas</h2>
          <div className="space-y-4">
            <p className="text-[#F6F1E8]/70">
              These use the <code className="bg-[#1a0d2e] px-2 py-1 rounded text-[#F6E84A]">cursor-hover</code> class:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="cursor-hover p-6 bg-[#1a0d2e] border border-[#8B5CFF]/30 rounded-lg hover:border-[#8B5CFF]/70 hover:bg-[#1a0d2e]/80">
                <h3 className="text-[#F6E84A] font-semibold mb-2">Hover Area 1</h3>
                <p className="text-[#F6F1E8]/60">
                  This area has the cursor-hover class applied
                </p>
              </div>
              <div className="cursor-hover p-6 bg-[#1a0d2e] border border-[#8B5CFF]/30 rounded-lg hover:border-[#8B5CFF]/70 hover:bg-[#1a0d2e]/80">
                <h3 className="text-[#F6E84A] font-semibold mb-2">Hover Area 2</h3>
                <p className="text-[#F6F1E8]/60">
                  Watch the cursor expand and glow
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Work Cards (Portfolio Items) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6F1E8] mb-8">Work Cards</h2>
          <div className="space-y-4">
            <p className="text-[#F6F1E8]/70">
              Hover over work cards to see the lift effect with cursor expansion:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="work-card group p-6 bg-gradient-to-br from-[#8B5CFF]/20 to-[#1a0d2e] border border-[#8B5CFF]/30 rounded-lg overflow-hidden"
                >
                  <div className="w-full h-40 bg-[#8B5CFF]/20 rounded-lg mb-4 group-hover:bg-[#8B5CFF]/30 transition-all" />
                  <h3 className="text-[#F6E84A] font-semibold mb-2">
                    Project {item}
                  </h3>
                  <p className="text-[#F6F1E8]/60 text-sm">
                    This is a portfolio card that responds to cursor hover
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Cursor Information */}
        <section className="mb-16 p-8 bg-[#1a0d2e] border border-[#8B5CFF]/50 rounded-lg">
          <h2 className="text-2xl font-bold text-[#F6E84A] mb-4">
            💡 Cursor Information
          </h2>
          <div className="space-y-3 text-[#F6F1E8]/70">
            <p>
              <strong className="text-[#F6F1E8]">Cursor Parts:</strong> Small white center dot + larger outer circle
            </p>
            <p>
              <strong className="text-[#F6F1E8]">On Hover:</strong> Center dot turns yellow (#F6E84A), outer circle becomes violet (#8B5CFF) with glow
            </p>
            <p>
              <strong className="text-[#F6F1E8]">Animation:</strong> Smooth 60fps tracking with 0.15 easing (elegant trailing effect)
            </p>
            <p>
              <strong className="text-[#F6F1E8]">Mobile:</strong> Automatically disabled on touch devices
            </p>
            <p>
              <strong className="text-[#F6F1E8]">Elements Detected:</strong> Links, buttons, form inputs, and any element with <code className="bg-[#12051F] px-1">cursor-hover</code> class or <code className="bg-[#12051F] px-1">data-cursor-hover</code> attribute
            </p>
          </div>
        </section>

        {/* Section 7: Interactive Elements */}
        <section>
          <h2 className="text-3xl font-bold text-[#F6F1E8] mb-8">Try Different Interactions</h2>
          <div className="space-y-4">
            <div>
              <p className="text-[#F6F1E8]/70 mb-4">
                Move your cursor around and interact with any element. Watch how the custom cursor adapts to different interactive elements.
              </p>
              <div className="bg-[#1a0d2e] border border-[#8B5CFF]/30 p-6 rounded-lg">
                <p className="text-[#F6E84A] font-semibold mb-4">
                  Test Cases:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F6F1E8]/70">
                  <li>Hover slowly over elements to see the trailing effect</li>
                  <li>Click buttons to see the cursor respond to click events</li>
                  <li>Type in input fields - cursor interaction remains smooth</li>
                  <li>Move to edges of screen to see easing behavior</li>
                  <li>Try on mobile device to see cursor hide automatically</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
