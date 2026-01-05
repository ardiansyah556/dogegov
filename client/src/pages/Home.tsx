import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Scissors, Trash2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * $DOGEGOV - Department of Government Efficiency
 * 
 * Design Philosophy: Official Government Minimalism with Satirical Edge
 * - Deep Navy Blue (#002868) + White + Gold (#D4AF37) + Warning Red (#FF0000)
 * - Serif typography (Playfair Display for headers, Lora for body)
 * - Bureaucratic aesthetic meets crypto meme culture
 * - Emphasis on efficiency, deletion, and self-termination narrative
 */

export default function Home() {
  const tokenomicsData = [
    { name: "Liquidity Pool", value: 90, color: "#002868" },
    { name: "Operations", value: 10, color: "#D4AF37" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white border-b-2 border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/dogegov-seal.png"
              alt="DOGEGOV Seal"
              className="h-12 w-12"
            />
            <span className="font-bold text-lg text-blue-900">$DOGEGOV</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("mandate")}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Mandate
            </button>
            <button
              onClick={() => scrollToSection("what-is")}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              What Is
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Budget
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Join
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white border-b-4 border-blue-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Seal and Visual */}
            <div className="flex justify-center md:justify-start relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src="/images/dogegov-seal.png"
                  alt="Department of Government Efficiency Seal"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
                {/* Animated scissors */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 scissors-animate">
                  <Scissors className="w-16 h-16 text-red-600" />
                </div>
              </div>
            </div>

            {/* Right: Hero Text */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
                  The Only Department Designed to Delete Itself
                </h1>
                <p className="text-xl text-gray-700 font-serif italic">
                  Cutting Red Tape. Cutting Waste. Cutting Itself.
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                $DOGEGOV represents a radical reimagining of government efficiency. Not a promise of eternity. A countdown.
              </p>

              <div className="flex gap-4 pt-4">
              <Button
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-base font-semibold"
                onClick={() => scrollToSection("mandate")}
              >
                View Official Mandate
              </Button>
              <Button
                onClick={() => scrollToSection("community")}
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-gray-50 px-8 py-6 text-base font-semibold"
              >
                Join the Protocol
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Mandates Section */}
      <section id="mandate" className="py-20 px-4 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
            Official Mandates & Verification
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            $DOGEGOV follows the DOGE ideology of radical efficiency, validated by public statements and official directives.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: DOGE Origin */}
            <Card className="border-2 border-blue-900 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">DOGE Origin Signal</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Public references connecting DOGE with government efficiency ideology and radical simplification principles.
              </p>
              <Button
                className="bg-blue-900 hover:bg-navy-800 text-white w-full"
                onClick={() => window.open("https://x.com/elonmusk/status/1832956111281877225", "_blank")}
              >
                View Origin Signal
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Card 2: Final Step Directive */}
            <Card className="border-4 border-red-600 p-8 hover:shadow-lg transition-shadow bg-red-50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-600">Final Step Directive</h3>
              </div>
              <blockquote className="text-lg font-serif italic text-gray-700 mb-6 pl-4 border-l-4 border-red-600">
                "The final step of @DOGE is to delete itself."
              </blockquote>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white w-full"
                onClick={() =>
                  window.open(
                    "https://x.com/elonmusk/status/1863666221301764462",
                    "_blank"
                  )
                }
              >
                View Final Directive
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* What Is $DOGEGOV Section */}
      <section id="what-is" className="py-20 px-4 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            What Is $DOGEGOV?
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">A Meme Token Inspired by Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                $DOGEGOV is not a traditional cryptocurrency project. It is a satirical representation of radical government efficiency ideology, inspired by DOGE culture and the principle that true efficiency eventually eliminates itself.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">No Endless Roadmap</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlike typical crypto projects promising perpetual growth, $DOGEGOV embraces a finite existence. There is no promise of eternity, only a countdown to inevitable deletion.
              </p>
            </div>

            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Radical Simplification</h3>
              <p className="text-gray-600 leading-relaxed">
                Every unnecessary element is eliminated. No excessive bureaucracy. No complex mechanisms. Just pure, distilled efficiency—until the final step: self-deletion.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 bg-red-50 p-4">
              <h3 className="text-2xl font-bold text-red-600 mb-3">The Final Objective</h3>
              <p className="text-gray-600 leading-relaxed">
                When nothing unnecessary remains, deletion is not a failure—it is the ultimate success. $DOGEGOV is designed with its own termination in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
            Budget Allocation
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Written like an official budget document with ironic undertones.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <ResponsiveContainer width={300} height={300}>
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Budget Details */}
            <div className="space-y-6">
              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">90% — Liquidity Pool</h3>
                <p className="text-gray-600">
                  Maximum Efficiency. Ensures market stability and eliminates unnecessary friction in token mechanics.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">10% — Operations & Awareness</h3>
                <p className="text-gray-600">
                  Minimum Bureaucracy. Covers only essential operational costs and community awareness initiatives.
                </p>
              </div>

              <div className="bg-blue-900 text-white p-6 mt-8">
                <p className="text-sm font-mono mb-2">OFFICIAL BUDGET NOTICE</p>
                <p className="text-gray-200">
                  This allocation reflects the core principle: maximum efficiency through minimal overhead. When efficiency is complete, all allocations cease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Execution Timeline
          </h2>

          <div className="space-y-8">
            {/* Phase I */}
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                Phase I
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Department Formation</h3>
                <p className="text-gray-600">
                  Official establishment of the Department of Government Efficiency. Seal creation, mandate publication, and initial protocol deployment.
                </p>
              </div>
            </div>

            {/* Phase II */}
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                Phase II
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Bureaucracy Reduction</h3>
                <p className="text-gray-600">
                  Systematic elimination of unnecessary processes. Streamlining of operations. Cutting of red tape and inefficient mechanisms.
                </p>
              </div>
            </div>

            {/* Phase III */}
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                Phase III
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Maximum Efficiency</h3>
                <p className="text-gray-600">
                  All unnecessary elements removed. Operations reduced to essential functions only. Perfect efficiency achieved.
                </p>
              </div>
            </div>

            {/* Final Phase */}
            <div className="flex gap-6 items-start">
              <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg flex-col">
                <span>Final</span>
                <span className="text-sm">Phase</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-red-600 mb-2">Department Self-Deletion Initiated</h3>
                <p className="text-gray-600">
                  When all efficiency objectives are met and nothing unnecessary remains, the final step is inevitable: deletion. Not a failure. The ultimate success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            Why Deletion Is the Final Step
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Scissors className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">True Efficiency Removes Excess</h3>
                <p className="text-gray-600">
                  Every system contains unnecessary elements. Perfect efficiency means identifying and eliminating all waste, all bureaucracy, all excess.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Trash2 className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Perfect Systems Leave No Trace</h3>
                <p className="text-gray-600">
                  A truly efficient system requires nothing to sustain it. No overhead. No maintenance. No perpetual existence. Only the completion of its purpose.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Scissors className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Bureaucracy Exists to Be Cut</h3>
                <p className="text-gray-600">
                  All bureaucratic structures are temporary. They exist only to solve specific problems. Once solved, they should cease to exist.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-4 border-red-600 p-6">
              <p className="text-gray-700 font-serif italic">
                When nothing unnecessary remains, deletion is not a tragedy. It is the proof that efficiency was achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Symbol Section */}
      <section className="py-20 px-4 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 text-center">
            The Symbol of Efficiency
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/images/dogegov-seal.png"
                alt="DOGEGOV Seal Components"
                className="w-64 h-64 object-contain"
              />
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Shiba Inu</h3>
                <p className="text-gray-600 text-sm">
                  DOGE culture and public accountability. A symbol of decentralized authority and community-driven governance.
                </p>
              </div>

              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Business Suit</h3>
                <p className="text-gray-600 text-sm">
                  Government authority and official legitimacy. The formal structure that must eventually be deconstructed.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-lg font-bold text-red-600 mb-2">Red Scissors</h3>
                <p className="text-gray-600 text-sm">
                  Aggressive efficiency and active deletion. The tool of bureaucratic reduction and radical simplification.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Paperwork</h3>
                <p className="text-gray-600 text-sm">
                  Bureaucracy being eliminated. The tangible representation of excess being cut away, piece by piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Notice Section */}
      <section className="py-20 px-4 bg-red-50 border-b-4 border-red-600">
        <div className="container mx-auto max-w-2xl">
          <div className="border-4 border-red-600 p-8 bg-white">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
              OFFICIAL NOTICE
            </h2>

            <div className="space-y-4 text-center">
              <p className="text-lg font-serif text-gray-700">
                This department has a termination plan.
              </p>
              <p className="text-lg font-serif text-gray-700">
                $DOGEGOV is not designed to last forever.
              </p>
              <p className="text-lg font-serif text-gray-700 font-bold">
                Efficiency has an endpoint.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-red-600 text-center text-sm text-gray-600 font-mono">
              <p>CLASSIFIED DOCUMENT</p>
              <p>DEPARTMENT OF GOVERNMENT EFFICIENCY</p>
              <p>TERMINATION PROTOCOL ACTIVE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Join the Department
          </h2>

          <p className="text-xl text-gray-600 font-serif italic mb-12">
            Participation is optional. Efficiency is inevitable.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              className="bg-blue-900 hover:bg-navy-800 text-white px-8 py-6 text-base font-semibold"
              onClick={() => window.open("https://t.me/dogegov", "_blank")}
            >
              Join Telegram
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              className="bg-blue-900 hover:bg-navy-800 text-white px-8 py-6 text-base font-semibold"
              onClick={() => window.open("https://x.com/dogegov_meme", "_blank")}
            >
              Follow on X
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 border-t-4 border-gold">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Department of Government Efficiency</h3>
              <p className="text-gray-300 text-sm">
                Established to be removed.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("mandate")}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    Mandate
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("what-is")}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    What Is $DOGEGOV
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("timeline")}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    Timeline
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Important Notices</h3>
              <p className="text-gray-300 text-sm">
                No price predictions. No investment guarantees. No financial advice. Ideology-driven meme branding only.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p className="font-mono mb-2">Department of Government Efficiency</p>
            <p>Established to be removed. All rights reserved until deletion.</p>
            <p className="mt-4 text-xs">© 2026 $DOGEGOV. This is a satirical meme project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
