import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['358bc2f754fd479fb528742acb8ab3d6'],
    table: 'sp_instance',
    data: {
        active: true,
        advanced_placeholder_dimensions: false,
        async_load: false,
        async_load_device_type: 'desktop,tablet,mobile',
        async_load_trigger: 'viewport',
        color: 'default',
        order: 1,
        placeholder_dimensions: `{
	"mobile": {
		"height": "250px",
		"width": "100%"
	},
	"desktop": {
		"height": "250px",
		"width": "100%"
	},
	"tablet": {
		"height": "250px",
		"width": "100%"
	}
}`,
        placeholder_dimensions_script: `function evaluateConfig(options) { return {
	"mobile": {
		"height": "250px",
		"width": "100%"
	},
	"desktop": {
		"height": "250px",
		"width": "100%"
	},
	"tablet": {
		"height": "250px",
		"width": "100%"
	}
}; }`,
        placeholder_template: `<!--
	AngularJS template with configurable options.
	Use the "options" object to control dynamic behavior.
	Example: Display an element when max row count is 10:
	<div ng-if="options.maxRowCount === 10"></div>
	The "skeleton-container" class is used for loading placeholders.
-->
	<div class="skeleton-container">
	<!-- Header Skeleton -->
	<div class="skeleton-box skeleton-header"></div>
	<!-- Body Skeleton -->
	<div class="skeleton-box skeleton-line"></div>
	<div class="skeleton-box skeleton-line small"></div>
	<div class="skeleton-box skeleton-line medium"></div>
</div>`,
        preserve_placeholder_size: false,
        size: 'md',
        sp_column: 'ae0726cf85d7445a9794a1cfdf51235a',
        sp_widget: '566e44f51e2c42c4864e4d253fa871df',
    },
})
