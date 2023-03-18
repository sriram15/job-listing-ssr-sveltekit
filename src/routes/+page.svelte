<script lang="ts">
    import JobDisplay from '../components/JobDisplay.svelte';
    import type { PageServerData } from './$types';

    export let data: PageServerData;
</script>

<div class="home-page">
    <h1>Job Listing Home page</h1>

    {#each data.job_list as job}
        <JobDisplay job={job}/>
    {/each}
</div>

<style>
    .home-page {
        padding: 2rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>