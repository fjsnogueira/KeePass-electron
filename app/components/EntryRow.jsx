import React from 'react';
import { getEntryFieldValue } from '../utils/Entry';
//FIXME
var moment = require('moment');

export default class EntryRow extends React.Component {
    copyToClipboard = (field, title) => (e) => {
        const value = getEntryFieldValue(this.props.entry, field);
        if (value) {
            this.props.copyToClipboard(value);
            this.props.createNotification(`${title ? title : field} copied to clipboard`);
        }
    }

    render() {
        var entry = this.props.entry;
        return <tr key={entry.get('uuid')}>
            <td className="app-column-id">
                {this.props.index + 1}
            </td>
            <td className="uk-width-1-4" onClick={() => this.props.openEntryModal(entry.get('UUID'))} title={getEntryFieldValue(entry, 'Title', '*no title*')}>
                <a>{getEntryFieldValue(entry, 'Title', '*no title*')}</a>
            </td>
            <td className="uk-width-1-4" onDoubleClick={this.copyToClipboard('UserName', 'Username')} title={getEntryFieldValue(entry, 'UserName')}>
                {getEntryFieldValue(entry, 'UserName')}
            </td>
            <td className="uk-width-1-4" onDoubleClick={this.copyToClipboard('Password')} title="*hidden*">
                *hidden*
            </td>
            <td className="uk-width-1-4" onDoubleClick={this.copyToClipboard('URL')} title={getEntryFieldValue(entry, 'URL')}>
                {getEntryFieldValue(entry, 'URL')}
            </td>
        </tr>;
    }
}
