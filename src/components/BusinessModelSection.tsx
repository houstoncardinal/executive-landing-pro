import { FinancialDetail } from "@/components/ui/financial-detail";

export const BusinessModelSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Header for Meetings */}
        <div className="mb-8 md:mb-12">
          <div className="inline-block border-l-4 border-primary px-4 md:px-6 py-3 md:py-4 mb-4 md:mb-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-gray-900">
              BUSINESS MODEL <span className="text-primary">& EDGE</span>
            </h2>
          </div>
          <p className="text-gray-800 text-base md:text-xl font-bold max-w-2xl">
            Revolutionary economics meets sustainable scale
          </p>
        </div>

        {/* Enhanced Two Column Layout for Better Visibility */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT: Creator Economics */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 border-2 border-primary/60 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rotate-45 rounded-sm" />
                </div>
                <h3 className="text-gray-900 font-black text-lg md:text-2xl uppercase tracking-wide md:tracking-wider">Creator Ownership</h3>
              </div>
              
              {/* Enhanced Comparison Bars */}
              <div className="space-y-4 md:space-y-6">
                <FinancialDetail
                  title="Traditional Studio Model"
                  position="right"
                  details={[
                    { label: "Writer Fee", value: "$50K-100K", subtext: "Per episode upfront" },
                    { label: "Backend Points", value: "2-5%", subtext: "Of net profits only" },
                    { label: "IP Ownership", value: "0%", subtext: "Studio owns everything" },
                    { label: "Creative Control", value: "Limited", subtext: "Subject to network approval" },
                    { label: "Rerun Revenue", value: "Declining", subtext: "Capped residuals" },
                  ]}
                  className="block"
                >
                  <div>
                    <div className="flex justify-between mb-2 md:mb-3">
                      <span className="text-gray-700 text-sm md:text-lg font-bold uppercase">Traditional</span>
                      <span className="text-red-600 text-xl md:text-3xl font-black">5%</span>
                    </div>
                    <div className="h-8 md:h-10 bg-gray-200 rounded overflow-hidden relative">
                      <div className="h-full bg-red-600 w-[5%]"></div>
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xs md:text-sm font-bold">Networks: 95%</span>
                    </div>
                  </div>
                </FinancialDetail>
                
                <FinancialDetail
                  title="Taste Creator Model"
                  position="right"
                  details={[
                    { label: "Writer Fee", value: "$75K-200K", subtext: "Competitive upfront" },
                    { label: "Backend Points", value: "40%+", subtext: "Of gross revenue" },
                    { label: "IP Co-Ownership", value: "Yes", subtext: "Shared rights from day one" },
                    { label: "Creative Control", value: "Full", subtext: "Creator-driven process" },
                    { label: "Perpetual Revenue", value: "Forever", subtext: "Revenue share continues" },
                    { label: "Licensing Share", value: "40%", subtext: "All downstream deals" },
                  ]}
                  className="block"
                >
                  <div>
                    <div className="flex justify-between mb-2 md:mb-3">
                      <span className="text-primary text-sm md:text-lg font-bold uppercase">Taste Model</span>
                      <span className="text-primary text-xl md:text-3xl font-black">40%</span>
                    </div>
                    <div className="h-10 md:h-12 bg-gray-200 rounded overflow-hidden border-2 border-primary/50">
                      <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-[40%] flex items-center justify-center">
                        <span className="text-white text-xs md:text-lg font-bold">Creators</span>
                      </div>
                    </div>
                  </div>
                </FinancialDetail>
              </div>
              
              <FinancialDetail
                title="Ownership Multiplier"
                position="bottom"
                details={[
                  { label: "Traditional Take", value: "5%", subtext: "Industry standard" },
                  { label: "Taste Take", value: "40%", subtext: "Our creator model" },
                  { label: "Multiplier", value: "8x", subtext: "More ownership" },
                  { label: "Lifetime Value", value: "12x", subtext: "With IP co-ownership" },
                ]}
              >
                <div className="mt-6 md:mt-8 bg-primary/15 border-2 border-primary/50 rounded-lg p-4 md:p-6 text-center">
                  <div className="text-primary text-3xl md:text-5xl font-black">8x</div>
                  <div className="text-gray-800 text-sm md:text-lg font-bold uppercase">More Ownership</div>
                </div>
              </FinancialDetail>
            </div>

            {/* Enhanced Chicago Advantage */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center flex-shrink-0">
                  <div className="grid grid-cols-2 gap-1 w-5 h-5 md:w-6 md:h-6">
                    <div className="bg-orange-400 rounded-sm" />
                    <div className="bg-orange-400/50 rounded-sm" />
                    <div className="bg-orange-400/50 rounded-sm" />
                    <div className="bg-orange-400 rounded-sm" />
                  </div>
                </div>
                <h3 className="text-gray-900 font-black text-lg md:text-2xl uppercase tracking-wide md:tracking-wider">Production Edge</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <FinancialDetail
                  title="LA/NYC Production Costs"
                  position="top"
                  details={[
                    { label: "Studio Rental", value: "$45K/day", subtext: "Sound stage costs" },
                    { label: "Crew Rates", value: "+40%", subtext: "Union premiums" },
                    { label: "Permits", value: "$15K avg", subtext: "Location fees" },
                    { label: "Talent Housing", value: "$8K/week", subtext: "Per principal" },
                    { label: "Total/Season", value: "$2.4M", subtext: "10 episode season" },
                  ]}
                >
                  <div className="text-center">
                    <div className="text-gray-700 text-sm md:text-lg mb-2 md:mb-3 font-bold">LA/NYC</div>
                    <div className="text-gray-700 text-xl md:text-3xl font-black">$2.4M</div>
                  </div>
                </FinancialDetail>
                <FinancialDetail
                  title="Chicago Production Costs"
                  position="top"
                  details={[
                    { label: "Studio Rental", value: "$28K/day", subtext: "38% lower rates" },
                    { label: "Crew Rates", value: "Base", subtext: "Competitive local talent" },
                    { label: "Tax Incentive", value: "30%", subtext: "Illinois film credit" },
                    { label: "Talent Housing", value: "$4K/week", subtext: "Lower cost of living" },
                    { label: "Total/Season", value: "$1.7M", subtext: "10 episode season" },
                  ]}
                >
                  <div className="text-center border-l-4 border-primary/50 pl-4">
                    <div className="text-primary text-sm md:text-lg mb-2 md:mb-3 font-bold">Chicago</div>
                    <div className="text-primary text-2xl md:text-4xl font-black">$1.7M</div>
                  </div>
                </FinancialDetail>
              </div>
              
              <FinancialDetail
                title="Chicago Cost Advantage"
                position="bottom"
                details={[
                  { label: "Per Season Savings", value: "$700K", subtext: "Direct cost reduction" },
                  { label: "Tax Credits", value: "30%", subtext: "Illinois incentive" },
                  { label: "Effective Savings", value: "42%", subtext: "With all incentives" },
                  { label: "5-Year Projection", value: "$8.4M", subtext: "Cumulative savings" },
                ]}
              >
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-gray-200 text-center">
                  <div className="text-primary text-2xl md:text-3xl font-black">30% Savings</div>
                  <div className="text-gray-700 text-sm md:text-lg font-semibold">Per show, per season</div>
                </div>
              </FinancialDetail>
            </div>
          </div>

          {/* RIGHT: Revenue Model */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center flex-shrink-0">
                  <div className="flex flex-col gap-1">
                    <div className="w-5 md:w-6 h-1.5 md:h-2 bg-green-500 rounded-full" />
                    <div className="w-4 md:w-5 h-1.5 md:h-2 bg-green-500/70 rounded-full" />
                    <div className="w-3 md:w-4 h-1.5 md:h-2 bg-green-500/50 rounded-full" />
                  </div>
                </div>
                <h3 className="text-gray-900 font-black text-lg md:text-2xl uppercase tracking-wide md:tracking-wider">Revenue Streams</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <FinancialDetail
                  title="Subscription Revenue (SVOD)"
                  position="left"
                  details={[
                    { label: "Premium Tier", value: "$9.99/mo", subtext: "Ad-free experience" },
                    { label: "Ad-Supported", value: "$4.99/mo", subtext: "With limited ads" },
                    { label: "Annual Option", value: "2 months free", subtext: "20% discount" },
                    { label: "Churn Target", value: "<5%", subtext: "Monthly retention" },
                    { label: "LTV", value: "$120", subtext: "Average subscriber" },
                  ]}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 flex justify-between items-center shadow-md hover:border-primary/50 transition-colors">
                    <span className="text-gray-900 text-sm md:text-lg font-bold">Subscription (SVOD)</span>
                    <span className="text-green-600 text-lg md:text-2xl font-black">40%</span>
                  </div>
                </FinancialDetail>
                <FinancialDetail
                  title="Domestic Licensing"
                  position="left"
                  details={[
                    { label: "Linear TV", value: "$500K-1.5M", subtext: "Per series window" },
                    { label: "AVOD Platforms", value: "$200K-500K", subtext: "Tubi, Pluto, etc." },
                    { label: "Theatrical", value: "$50K-200K", subtext: "Special event screenings" },
                    { label: "Airline/Hotel", value: "$75K-150K", subtext: "Travel entertainment" },
                  ]}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 flex justify-between items-center shadow-md hover:border-primary/50 transition-colors">
                    <span className="text-gray-900 text-sm md:text-lg font-bold">Licensing (Domestic)</span>
                    <span className="text-green-600 text-lg md:text-2xl font-black">25%</span>
                  </div>
                </FinancialDetail>
                <FinancialDetail
                  title="International Revenue"
                  position="left"
                  details={[
                    { label: "UK/Ireland", value: "$300K-800K", subtext: "Strong comedy market" },
                    { label: "Australia/NZ", value: "$150K-400K", subtext: "English-speaking" },
                    { label: "Europe", value: "$200K-600K", subtext: "Dubbed/subtitled" },
                    { label: "Format Sales", value: "$100K-500K", subtext: "Local remakes" },
                  ]}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 flex justify-between items-center shadow-md hover:border-primary/50 transition-colors">
                    <span className="text-gray-900 text-sm md:text-lg font-bold">International</span>
                    <span className="text-green-600 text-lg md:text-2xl font-black">20%</span>
                  </div>
                </FinancialDetail>
                <FinancialDetail
                  title="Merchandise & Live Events"
                  position="left"
                  details={[
                    { label: "Apparel", value: "$15-45", subtext: "Average order value" },
                    { label: "Live Shows", value: "$25-75", subtext: "Ticket prices" },
                    { label: "Meet & Greet", value: "$150-300", subtext: "VIP experiences" },
                    { label: "Podcast Ads", value: "$50 CPM", subtext: "Companion content" },
                  ]}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 flex justify-between items-center shadow-md hover:border-primary/50 transition-colors">
                    <span className="text-gray-900 text-sm md:text-lg font-bold">Merch & Live</span>
                    <span className="text-green-600 text-lg md:text-2xl font-black">15%</span>
                  </div>
                </FinancialDetail>
              </div>
            </div>

            {/* Enhanced Key Metrics */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-4 md:p-8 shadow-lg">
              <h3 className="text-gray-900 font-black text-lg md:text-2xl uppercase mb-4 md:mb-6">UNIT ECONOMICS</h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <FinancialDetail
                  title="Cost Per Show Breakdown"
                  position="top"
                  details={[
                    { label: "Development", value: "$150K", subtext: "Writers room, scripts" },
                    { label: "Pre-Production", value: "$200K", subtext: "Casting, locations" },
                    { label: "Production", value: "$1.0M", subtext: "Principal photography" },
                    { label: "Post-Production", value: "$250K", subtext: "Edit, VFX, music" },
                    { label: "Marketing", value: "$100K", subtext: "Launch campaign" },
                  ]}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 text-center shadow-md">
                    <div className="text-primary text-xl md:text-3xl font-black">$1.7M</div>
                    <div className="text-gray-700 text-xs md:text-sm uppercase font-bold">Cost/Show</div>
                  </div>
                </FinancialDetail>
                <FinancialDetail
                  title="Revenue Per Show Breakdown"
                  position="top"
                  details={[
                    { label: "Direct Subs", value: "$1.2M", subtext: "Attributed signups" },
                    { label: "Ad Revenue", value: "$600K", subtext: "In-show placements" },
                    { label: "Licensing", value: "$1.0M", subtext: "Domestic deals" },
                    { label: "International", value: "$500K", subtext: "Territory sales" },
                    { label: "Ancillary", value: "$200K", subtext: "Merch, live, etc." },
                  ]}
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 text-center shadow-md">
                    <div className="text-primary text-xl md:text-3xl font-black">$3.5M</div>
                    <div className="text-gray-700 text-xs md:text-sm uppercase font-bold">Revenue/Show</div>
                  </div>
                </FinancialDetail>
                <FinancialDetail
                  title="Net Profit Analysis"
                  position="bottom"
                  details={[
                    { label: "Gross Revenue", value: "$3.5M", subtext: "Total per show" },
                    { label: "Production Cost", value: "$1.7M", subtext: "All-in cost" },
                    { label: "Gross Profit", value: "$1.8M", subtext: "Before overhead" },
                    { label: "Gross Margin", value: "106%", subtext: "Return on cost" },
                    { label: "ROI", value: "2.1x", subtext: "Per show return" },
                  ]}
                >
                  <div className="bg-white border-2 border-primary rounded-lg p-3 md:p-4 text-center col-span-2 shadow-lg">
                    <div className="text-green-600 text-2xl md:text-4xl font-black">$1.8M</div>
                    <div className="text-gray-800 text-xs md:text-sm uppercase font-bold">Net Profit Per Show</div>
                  </div>
                </FinancialDetail>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Highlight Bar */}
        <div className="mt-8 md:mt-16 bg-gradient-to-r from-primary/10 via-orange-100/50 to-primary/10 border-l-4 md:border-l-6 border-primary rounded-lg p-4 md:p-8 shadow-xl">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <FinancialDetail
              title="Gross Margin Analysis"
              position="top"
              details={[
                { label: "Revenue/Show", value: "$3.5M", subtext: "Average total" },
                { label: "Cost/Show", value: "$1.7M", subtext: "All-in production" },
                { label: "Gross Profit", value: "$1.8M", subtext: "Per show" },
                { label: "Margin %", value: "106%", subtext: "Return on investment" },
              ]}
            >
              <div className="text-center">
                <div className="text-primary text-xl sm:text-2xl md:text-4xl font-black">106%</div>
                <div className="text-gray-800 text-xs md:text-lg uppercase font-bold">Gross Margin</div>
              </div>
            </FinancialDetail>
            <FinancialDetail
              title="IP Payback Period"
              position="top"
              details={[
                { label: "Year 1", value: "40%", subtext: "Initial revenue" },
                { label: "Year 2", value: "75%", subtext: "Cumulative" },
                { label: "Year 3", value: "100%", subtext: "Full payback" },
                { label: "Year 5+", value: "180%+", subtext: "Pure profit" },
              ]}
            >
              <div className="text-center">
                <div className="text-primary text-xl sm:text-2xl md:text-4xl font-black">3-5 Yrs</div>
                <div className="text-gray-800 text-xs md:text-lg uppercase font-bold">IP Payback</div>
              </div>
            </FinancialDetail>
            <FinancialDetail
              title="Franchise Potential"
              position="top"
              details={[
                { label: "Spinoffs", value: "2-3x", subtext: "Revenue multiplier" },
                { label: "Sequels", value: "Unlimited", subtext: "Recurring seasons" },
                { label: "Merch", value: "Perpetual", subtext: "Evergreen revenue" },
                { label: "Format Sales", value: "Global", subtext: "International remakes" },
              ]}
            >
              <div className="text-center">
                <div className="text-primary text-xl sm:text-2xl md:text-4xl font-black">Infinite</div>
                <div className="text-gray-800 text-xs md:text-lg uppercase font-bold">Franchise</div>
              </div>
            </FinancialDetail>
          </div>
        </div>
      </div>
    </section>
  );
};
