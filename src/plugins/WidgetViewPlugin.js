import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import repairIcon from '../assets/repair.svg';

export default class WidgetViewPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'widgetView', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Widget View',
				icon: repairIcon,
				tooltip: true
			} );
			view.on( 'execute', () => {
				const config = editor.config.get( 'widgetViewActions' );
				if ( config && config.click ) {
					config.click();
				}
			} );
			return view;
		} );
	}
}
