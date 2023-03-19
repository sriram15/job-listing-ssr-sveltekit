import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../chunks/index.js";
const JobDisplay_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".job-item.svelte-1vxb82m{border:1px solid grey;padding:2rem;width:50%;margin:1rem;border-radius:10px}.job-details.svelte-1vxb82m{display:flex;justify-content:space-between}",
  map: null
};
const JobDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { job } = $$props;
  if ($$props.job === void 0 && $$bindings.job && job !== void 0)
    $$bindings.job(job);
  $$result.css.add(css$1);
  return `<div class="job-item svelte-1vxb82m"><p>Job Title: <b>${escape(job.job_title)}</b></p>
    <p>Description: <b>${escape(job.job_description)}</b></p>
    <div class="job-details svelte-1vxb82m"><span>Company Name : <b>${escape(job.company_name)}</b></span>
        <span>Compensation per year: <b>${escape(job.compensation_per_year)}</b></span></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".home-page.svelte-1dmey2q{padding:2rem 4rem;display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="home-page svelte-1dmey2q"><h1>Job Listing Home page</h1>

    ${each(data.job_list, (job) => {
    return `${validate_component(JobDisplay, "JobDisplay").$$render($$result, { job }, {}, {})}`;
  })}
</div>`;
});
export {
  Page as default
};
