<script lang="ts">
    import type { JobItem } from "../models";

    export let job: JobItem;
</script>

<div class="job-item">
    <p>Job Title: <b>{job.job_title}</b></p>
    <p>Description: <b>{job.job_description}</b></p>
    <div class="job-details">
        <span>Company Name : <b>{job.company_name}</b></span>
        <span>Compensation per year: <b>{job.compensation_per_year}</b></span>
    </div>
</div>

<style>
    .job-item {
        border: 1px solid grey;
        padding: 2rem;
        width: 50%;
        margin: 1rem;
        border-radius: 10px;
    }

    .job-details {
        display: flex;
        justify-content: space-between;
    }
</style>